import { baseURL, sub } from '$lib/info'
import { proxifyImage, proxifyArtistImage } from '$lib/utils'
import { json } from '@sveltejs/kit'

export async function GET({ url }) {
    const query = url.searchParams.get('q')
    const resp = await fetch(baseURL + sub.search.artists + query)
    const data = await resp.json()
    const results = await data.results

    await results.forEach((res) => {
        if (res.image.includes('jiosaavn.com')) {
            res.image = proxifyArtistImage(res.image)
        } else {
            res.image = proxifyImage(res.image, 50)
        }
	})

    return json({
        'results': results
    })
}