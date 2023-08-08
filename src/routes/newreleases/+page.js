export async function load({ fetch }) {
    const resp = await fetch(`/api/newreleases`);
    const data = await resp.json()
    return data;
}