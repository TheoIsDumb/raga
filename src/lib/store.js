import { writable } from "svelte/store";

export const active = writable({});

export let query = writable("");