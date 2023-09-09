export async function load({ url, fetch }) {
    const query = url.searchParams.get('q') || 1
    const index = url.searchParams.get('index') || 1
    const resp = await fetch(`/api/search/albums?q=${query}&index=${index}`)
    const data = await resp.json()
    return data
}