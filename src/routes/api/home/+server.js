import { baseURL, sub } from '$lib/info.js'
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
    const resp = await fetch(baseURL + sub.modules);
    const data = await resp.json();

    return json(data);
}