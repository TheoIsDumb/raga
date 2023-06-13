import { baseURL, sub } from '$lib/info.js'

export async function load({ params }) {
    const slug = params.slug.split('&index=')[0];
    const index = params.slug.split('&index=')[1] || 1;
    const resp = await fetch(baseURL + sub.index + index + sub.search.songs + slug);
    const data = await resp.json()
    const searchDetails = await data.results;
    return {
        index,
        searchDetails
    };
}