import { baseURL, sub } from '$lib/info.js'
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
    const id = url.searchParams.get('songid');
    const resp = await fetch(baseURL + sub.reco + id);
    const data = await resp.json();

    return json(data);
}