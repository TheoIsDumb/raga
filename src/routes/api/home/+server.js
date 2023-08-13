import { baseURL, sub } from '$lib/info'
import { proxify } from '$lib/utils'
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
    const resp = await fetch(baseURL + sub.modules, {
        method: 'GET',
        headers: {
            cookie: 'L=english; gdpr_acceptance=true; DL=english'
        }
    });
    const data = await resp.json();

    await data.charts.forEach((res) => {
        res.image = proxify(res.image, "media")
	})

    await data.top_playlists.forEach((res) => {
        res.image = proxify(res.image, "media")
	})

    await data.new_albums.forEach((res) => {
        res.image = proxify(res.image, "media")
	})

    return json(data);
}