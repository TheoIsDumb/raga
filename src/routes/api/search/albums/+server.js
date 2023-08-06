import { baseURL, sub } from '$lib/info.js'
import { json } from '@sveltejs/kit';

export async function GET({ url, fetch }) {
    const query = url.searchParams.get('q');
    const resp = await fetch(baseURL + 'n=20' + sub.search.albums + query);
    const data = await resp.json();
    const results = await data.results;

    return json({
        'results': results
    });
}