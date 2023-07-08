// import { baseURL, sub } from '$lib/info.js'

// export async function load({ params }) {
//     const resp = await fetch(baseURL + sub.search.playlists + params.slug);
//     const data = await resp.json()
//     const playlists = await data.results;
//     return {
//         playlists
//     };
// }

import { baseURL, sub } from '$lib/info.js'
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
    const query = url.searchParams.get('q');
    const resp = await fetch(baseURL + sub.search.playlists + query);
    const data = await resp.json();
    const results = await data.results;

    return json(results);
}
