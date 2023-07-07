<script>
  import Songs from "$lib/icons/sidebar/Songs.svelte";
  import Albums from "$lib/icons/sidebar/Albums.svelte";
  import Artists from "$lib/icons/sidebar/Artists.svelte";
  import Playlists from "$lib/icons/sidebar/Playlists.svelte";

  import { fade } from "svelte/transition";
</script>

<div class="menu flex" transition:fade>
  <Songs />
  <Albums />
  <Artists />
  <Playlists />
</div>

<style>
  @media (min-width: 1200px) {
    div.menu {
      position: absolute;
      left: -4rem;
      gap: 0.5rem;
      flex-direction: column;
    }
  }
  @media (max-width: 1200px) {
    div.menu {
      margin-top: 3rem;
      margin-bottom: 1rem;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }
  :global(div.menu svg) {
    width: 3rem;
    height: 3rem;
    transition: all 0.3s;
  }
  :global(div.menu svg:hover) {
    filter: drop-shadow(0 0 1rem cyan);
  }
</style>
