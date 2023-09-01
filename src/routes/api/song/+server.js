import { baseURL, sub } from '$lib/info'
import { proxifyImage } from '$lib/utils'
import { json } from '@sveltejs/kit'

export async function GET({ url }) {
    const id = url.searchParams.get('id');
    const resp = await fetch(baseURL + sub.songDetails + id);
    const data = await resp.json();

    data.songs[0].image = proxifyImage(data.songs[0].image, 150)

    return json(data);
}