import { get } from 'svelte/store'
import { goto } from '$app/navigation'
import { currentTime, index, currentPlaylist, paused, repeat, query } from '$lib/store'

import pkg from 'node-forge';
const { util, cipher } = pkg;

const key = '38346591'
const iv = '00000000'

export const decrypt = (enc, kbps320) => {
  const encrypted = util.decode64(enc)
  const decipher = cipher.createDecipher('DES-ECB', util.createBuffer(key, 'utf8'))

  decipher.start({ iv: util.createBuffer(iv, 'utf8') })
  decipher.update(util.createBuffer(encrypted))
  decipher.finish()

  const dec = decipher.output.getBytes().replace('aac.saavncdn.com', 'proxy.raga.vkdbois.xyz/aac');
  // const finalURL = kbps320 === "true" ? dec.replace('_96', '_320') : dec.replace('_96', '_160');
  return dec;
}

//////////////////////////////////////////////////////////////////

export function playToggle() { paused.update((p) => p = !p); }
export function repeatToggle() { repeat.update((r) => r = !r); }

export function back() {
  currentTime.set(0);

  if (get(index) !== 0) {
      index.update((n) => n - 1);
  } else {
      index.set(get(currentPlaylist).length - 1)
  }
}

export function next() {
  currentTime.set(0);
  if (get(index) !== get(currentPlaylist).length - 1) {
      index.update((n) => n + 1);
  } else {
      index.set(0)
  }
}

//////////////////////////////////////////////////////////////////

export function searchSongs() { goto(`/search/songs?q=${get(query)}`); }
export function searchAlbums() { goto(`/search/albums?q=${get(query)}&index=1`); }
export function searchArtists() { goto(`/search/artists?q=${get(query)}`); }
export function searchPlaylists() { goto(`/search/playlists?q=${get(query)}`); }

export let buttonsArray = [
  {name: "Songs", function: searchSongs},
  {name: "Albums", function: searchAlbums},
  {name: "Artists", function: searchArtists},
  {name: "Playlists", function: searchPlaylists},
]