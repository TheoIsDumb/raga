import { baseURL, sub } from '$lib/info.js'
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
    const id = url.searchParams.get('songid');
    const resp = await fetch(baseURL + sub.lyrics + id);
    const data = await resp.json();
    const lyrics = data.lyrics;

    return json({
        "lyrics": lyrics
    });
}