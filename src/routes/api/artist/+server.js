import { baseURL, sub } from '$lib/info'
import { proxify } from '$lib/utils'
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
    const id = url.searchParams.get('id');
    const resp = await fetch(baseURL + sub.artistDetails + id);
    const data = await resp.json();

    data.image = proxify(data.image, "media", 150)

    await data.topSongs.forEach((res) => {
        res.image = proxify(res.image, "media", 150)
	})

    await data.singles.forEach((res) => {
        res.image = proxify(res.image, "media", 150)
	})

    await data.topAlbums.forEach((res) => {
        res.image = proxify(res.image, "media", 150)
	})

    return json(data);
}