import { baseURL, sub } from '$lib/info'
import { proxifyImage } from '$lib/utils'
import { json } from '@sveltejs/kit'

export async function GET({ url }) {
    const resp = await fetch(baseURL + sub.modules, {
        method: 'GET',
        headers: {
            cookie: 'L=english; gdpr_acceptance=true; DL=english'
        }
    })
    const data = await resp.json()

    await data.charts.forEach((res) => {
        res.image = proxifyImage(res.image)
	})

    await data.top_playlists.forEach((res) => {
        res.image = proxifyImage(res.image)
	})

    await data.new_albums.forEach((res) => {
        res.image = proxifyImage(res.image, 150)
	})

    return json(data)
}