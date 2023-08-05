<script>
  import { query } from "$lib/store";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  $: pathname = $page.url.pathname;

  function searchSongs() { goto(`/search/songs?q=${$query}`); }
  function searchAlbums() { goto(`/search/albums?q=${$query}&index=1`); }
  function searchArtists() { goto(`/search/artists?q=${$query}`); }
  function searchPlaylists() { goto(`/search/playlists?q=${$query}`); }

  let buttonsArray = [
    {name: "Songs", function: searchSongs},
    {name: "Albums", function: searchAlbums},
    {name: "Artists", function: searchArtists},
    {name: "Playlists", function: searchPlaylists},
  ]
</script>

<div class="belowheader flex w-full gap-2">
  {#each buttonsArray as btn}
    <button
      class="text-sm flex-1 bg-transparent border border-gray-400 rounded p-0.5 cursor-pointer transition duration-300 hover:border-l-[1rem] hover:border-solid"
      class:clicked={pathname.includes(btn.name.toLowerCase())}
      on:click={() => {
        if ($query !== "") {
          btn.function()
        }
      }}
    >
    {btn.name}
    </button>
  {/each}
</div>

<style>
  .clicked {
    background-color: var(--fg) !important;
    color: var(--base) !important;
    border-left: 0 !important;
  }
</style>