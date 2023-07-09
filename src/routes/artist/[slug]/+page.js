export async function load({ params, url, fetch }) {
    const query = params.slug;
    const resp = await fetch(`/api/artist?id=${query}`);
    const data = await resp.json()
    return data;
}