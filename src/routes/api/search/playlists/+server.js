import { baseURL, sub } from '$lib/info'
import { proxifyImage } from '$lib/utils'
import { json } from '@sveltejs/kit'

export async function GET({ url }) {
    const query = url.searchParams.get('q');
    const resp = await fetch(baseURL + sub.search.playlists + query);
    const data = await resp.json();
    const results = await data.results;

    await results.forEach((res) => {
		res.image = proxifyImage(res.image, 50)
	})

    return json({
        'results': results
    });
}
