/**
 * Creates the stable tag slugs already used by the previous blog version.
 * Keep this behavior stable to avoid changing existing tag URLs.
 */
export function toSlug(value: string): string {
    return value
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ß/g, "ss")
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .replace(/\s+/g, "-")
        .replace(/^-+|-+$/g, "")
        .toLowerCase();
}

export default toSlug;
