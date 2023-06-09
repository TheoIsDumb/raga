<script>
  import Songs from "$lib/icons/sidebar/Songs.svelte";
  import Albums from "$lib/icons/sidebar/Albums.svelte";
  import Artists from "$lib/icons/sidebar/Artists.svelte";
  import Playlists from "$lib/icons/sidebar/Playlists.svelte";
</script>

<div class="container">
  <div class="menu flex flex-dirc">
    <Songs />
    <Albums />
    <Artists />
    <Playlists />
  </div>

  <slot />
</div>

<style>
  div.container {
    position: relative;
  }
  div.menu {
    position: absolute;
    left: -4rem;
    gap: 0.5rem;
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
