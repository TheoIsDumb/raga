import { baseURL, sub } from '$lib/info.js'

export async function load() {
    const resp = await fetch(baseURL + sub.modules);
    const data = await resp.json()
    return {
        modules: data
    };
}