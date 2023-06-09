import { baseURL, sub } from '$lib/info.js'

export async function load({ params }) {
    const resp = await fetch(baseURL + sub.albumDetails + params.slug);
    const data = await resp.json()
    return {
       albums: data
    };
}