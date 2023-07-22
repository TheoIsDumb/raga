<script>
  import { query } from "$lib/store";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  $: pathname = $page.url.pathname;
</script>

<div class="belowheader flex">
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
  .belowheader {
    width: 100%;
    gap: 0.5rem;
  }
  .belowheader button {
    flex: 1;
    background-color: transparent;
    color: var(--fg);
    border: 0.08rem solid var(--fg);
    border-radius: 0.3rem;
    padding: 0.2rem;
    cursor: pointer;
    transition: 0.3s;
  }
  .belowheader button:hover {
    border-left: 1rem solid var(--fg);
  }
  .clicked {
    background-color: var(--fg) !important;
    color: var(--base) !important;
    border-left: 0 !important;
  }
</style>
