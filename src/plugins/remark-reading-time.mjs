import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

export function remarkReadingTime() {
    return function (tree, { data }) {
        const readingTime = getReadingTime(toString(tree));
        const minutesRead = Math.max(1, Math.ceil(readingTime.minutes));

        data.astro.frontmatter.minutesRead = `${minutesRead} Minuten Lesezeit`;
    };
}
