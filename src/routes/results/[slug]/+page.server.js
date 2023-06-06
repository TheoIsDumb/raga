import { baseURL, sub } from '$lib/store.js';

export async function load({ params }) {
    const resp = await fetch(baseURL + sub.songSearch + params.slug);
    const data = await resp.json()
    const searchDetails = await data.results;
    return {
        searchDetails
    };
}