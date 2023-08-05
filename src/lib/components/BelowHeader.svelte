<script>
  import { query } from "$lib/store";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  $: pathname = $page.url.pathname;
</script>

<div class="belowheader flex w-full gap-2">
  <button
    class:clicked={pathname.includes("songs")}
    on:click={() => {
      if ($query !== "") {
        goto(`/search/songs?q=${$query}`);
      }
    }}
  >
    Songs
  </button>

  <button
    class:clicked={pathname.includes("albums")}
    on:click={() => {
      if ($query !== "") {
        goto(`/search/albums?q=${$query}&index=1`);
      }
    }}
  >
    Albums
  </button>

  <button
    class:clicked={pathname.includes("artists")}
    on:click={() => {
      if ($query !== "") {
        goto(`/search/artists?q=${$query}`);
      }
    }}
  >
    Artists
  </button>

  <button
    class:clicked={pathname.includes("playlists")}
    on:click={() => {
      if ($query !== "") {
        goto(`/search/playlists?q=${$query}`);
      }
    }}
  >
    Playlists
  </button>
</div>

<style>
  .belowheader button {
    @apply text-sm flex-1 bg-transparent border border-gray-400 rounded p-0.5 cursor-pointer transition duration-300;
  }
  .belowheader button:hover {
    @apply border-l-[1rem] border-solid;
  }
  .clicked {
    background-color: var(--fg) !important;
    color: var(--base) !important;
    border-left: 0 !important;
  }
</style>