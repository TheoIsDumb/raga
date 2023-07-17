import { writable } from "svelte/store";

export let active = writable({});

export const currentPlaylist = writable([]);

export let query = writable("");

export const index = writable(0);

export let BiggerPlayerVisible = writable(false);