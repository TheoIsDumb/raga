import { baseURL, sub } from '$lib/info.js'

export async function load({ params }) {
    const resp = await fetch(baseURL + sub.search.playlists + params.slug);
    const data = await resp.json()
    const playlists = await data.results;
    return {
        playlists
    };
}