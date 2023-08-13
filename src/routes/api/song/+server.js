import { baseURL, sub } from '$lib/info'
import { proxify } from '$lib/utils'
import { json } from '@sveltejs/kit'

export async function GET({ url }) {
    const id = url.searchParams.get('id');
    const resp = await fetch(baseURL + sub.songDetails + id);
    const data = await resp.json();

    data.songs[0].image = proxify(data.songs[0].image, "media", 150)

    return json(data);
}