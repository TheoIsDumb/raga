import { writable } from "svelte/store";

export const active = writable({});

export const currentPlaylist = writable([]);

export let query = writable("");