import { writable } from "svelte/store";

export const baseURL = "https://www.jiosaavn.com/api.php?_format=json&_marker=0&api_version=4&ctx=web6dot0&n=20&__call="

export const sub = Object.freeze({ 
    songDetails: "song.getDetails&pids=",
    songSearch: "search.getResults&q="
  });

export const active = writable({});