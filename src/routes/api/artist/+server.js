import { baseURL, sub } from '$lib/info'
import { proxifyImage } from '$lib/utils'
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
    const id = url.searchParams.get('id');
    const resp = await fetch(baseURL + sub.artistDetails + id);
    const data = await resp.json();

    data.image = proxifyImage(data.image, 150)

    await data.topSongs.forEach((res) => {
        res.image = proxifyImage(res.image, 150)
	})

    await data.singles.forEach((res) => {
        res.image = proxifyImage(res.image, 150)
	})

    await data.topAlbums.forEach((res) => {
        res.image = proxifyImage(res.image, 150)
	})

    return json(data);
}