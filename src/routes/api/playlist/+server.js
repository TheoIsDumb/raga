import { baseURL, sub } from '$lib/info'
import { proxifyImage } from '$lib/utils'
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
    const id = url.searchParams.get('id');
    const resp = await fetch(baseURL + sub.playlistDetails + id);
    const data = await resp.json();

    data.image = proxifyImage(data.image, 150)

    await data.list.forEach((res) => {
        res.image = proxifyImage(res.image)
    })

    return json(data);
}