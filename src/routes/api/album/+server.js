import { baseURL, sub } from '$lib/info.js'
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
    const id = url.searchParams.get('id');
    const resp = await fetch(baseURL + sub.albumDetails + id);
    const data = await resp.json();

    return json(data);
}