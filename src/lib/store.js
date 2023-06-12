import { writable } from "svelte/store";

export const active = writable({});

export let query = writable("");

export let charts = writable([]);
export let topPlaylists = writable([]);