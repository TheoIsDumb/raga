export async function load({ url, fetch }) {
    const query = url.searchParams.get('q') || 1
    const resp = await fetch(`/api/search/playlists?q=${query}`)
    const data = await resp.json()
    return data
}