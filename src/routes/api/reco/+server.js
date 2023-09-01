import { baseURL, sub } from '$lib/info'
import { proxifyImage } from '$lib/utils'
import { json } from '@sveltejs/kit'

export async function GET({ url }) {
    const id = url.searchParams.get('songid');
    const resp = await fetch(baseURL + sub.reco + id);
    const data = await resp.json();

    await data.forEach((res) => {
        res.image = proxifyImage(res.image)
	})

    return json(data);
}