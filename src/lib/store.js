import { writable } from "svelte/store"

export let active = writable({});

export const currentPlaylist = writable([]);

export let query = writable("");

export const index = writable(0);

export let BiggerPlayerVisible = writable(false);

export let currentTime = writable(0);
export let duration = writable(0);
export let paused = writable(true);

export let repeat = writable(false);