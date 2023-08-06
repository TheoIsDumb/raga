export async function load({ fetch }) {
    const resp = await fetch(`/api/topcharts`)
    const data = await resp.json()
    return {
        'data': data
    }
}