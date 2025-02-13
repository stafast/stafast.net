import type {APIRoute} from 'astro'

interface Activity {
    distance: number,
    sport_type: string,
    start_date: string
}

const STRAVA_CLIENT_ID = import.meta.env.STRAVA_CLIENT_ID
const STRAVA_CLIENT_SECRET = import.meta.env.STRAVA_CLIENT_SECRET
const STRAVA_REFRESH_TOKEN = import.meta.env.STRAVA_REFRESH_TOKEN
const tokenUrl = "https://www.strava.com/oauth/token"

const currentMonthFirstDayTimestamp = new Date(new Date().getFullYear(), new Date().getMonth(), 1, 0, 0, 0).getTime();
const lastMonthFirstDayTimestamp = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1, 0, 0, 0).getTime();

let accessToken: string | null = null;

async function refreshAccessToken() {

    const response = await fetch(tokenUrl, {
        method: 'POST',
        body: new URLSearchParams({
            client_id: STRAVA_CLIENT_ID,
            client_secret: STRAVA_CLIENT_SECRET,
            refresh_token: STRAVA_REFRESH_TOKEN,
            grant_type: "refresh_token",
        })
    })

    if (!response.ok) {
        return new Response(JSON.stringify({error: "Failed to fetch access_token"}));
    }

    const data = await response.json();
    accessToken = data.access_token;
}


export const GET: APIRoute = async () => {

    await refreshAccessToken();

    const response = await fetch("https://www.strava.com/api/v3/athlete/activities", {
        headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!response.ok) {
        return new Response(JSON.stringify({ error: "Failed to fetch data" }));
    }

    const data = await response.json();
    const runs: Activity[] = data.filter(({sport_type}: Activity) => sport_type === 'Run');

    const filterRunsByDate = (start: number, end?: number): number => {
        const filteredRuns = runs.filter(({start_date}) => {
            const timestamp = Date.parse(start_date);
            const isAfterStart = timestamp > start;
            const isBeforeEnd = end ? timestamp < end : true;

            return isAfterStart && isBeforeEnd;
        });

        return filteredRuns.reduce((sum, {distance}) => sum + distance, 0);
    };

    const formatKm = (meters: number) => (meters / 1000).toLocaleString('de-DE', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }) + ' km';

    const runsCurrentMonth = filterRunsByDate(currentMonthFirstDayTimestamp);
    const runsLastMonth = filterRunsByDate(lastMonthFirstDayTimestamp, currentMonthFirstDayTimestamp);

    const strava = {
        currentMonth: formatKm(runsCurrentMonth),
        lastMonth: formatKm(runsLastMonth)
    };

    if (!runs.length) {
        return new Response(JSON.stringify({error: "No runs found."}));
    }

    return new Response(JSON.stringify(strava), {status: 200});

}