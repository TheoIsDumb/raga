import { baseURL, sub } from '$lib/info.js'

export async function load({ params }) {
    const resp = await fetch(baseURL + sub.search.songs + params.slug);
    const data = await resp.json()
    const searchDetails = await data.results;
    return {
        searchDetails
    };
}