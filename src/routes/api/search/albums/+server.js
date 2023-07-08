import { baseURL, sub } from '$lib/info.js'
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
    const query = url.searchParams.get('q');
    const index = url.searchParams.get('index') || 1;
    const resp = await fetch(baseURL + sub.index + index + sub.search.albums + query);
    const data = await resp.json();
    const results = await data.results;

    return json({
        'index': index,
        'results': results
    });
}