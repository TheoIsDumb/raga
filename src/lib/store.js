import { writable } from "svelte/store"

export let active = writable({});
export const currentPlaylist = writable([]);
export const index = writable(0);

export let query = writable("");

export let BiggerPlayerVisible = writable(false);
export let SidebarVisible = writable(false);

export let currentTime = writable(0);
export let duration = writable(0);
export let paused = writable(true);
export let repeat = writable(false);

export let audioElement = writable();

export let historyEnabled = writable(true);
export let accentColor = writable('rose')
export let quality = writable("_96");