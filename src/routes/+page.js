export async function load({ fetch }) {
    const resp = await fetch(`/api/home`);
    const data = await resp.json()
    return data;
}