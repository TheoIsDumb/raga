<script>
  export let data;
  import { fade } from "svelte/transition";
  import PlaylistCardHoriz from "$lib/components/PlaylistCardHoriz.svelte";
  import Logo from "$lib/icons/Logo.svelte";
</script>

<div class="inner flex flex-dirc" in:fade>
  <div class="logo flex flex-jc flex-ac">
    <Logo />
  </div>

  <PlaylistCardHoriz array={data.modules.charts} name="Charts" />
  <PlaylistCardHoriz array={data.modules.top_playlists} name="Top Playlists" />
  <PlaylistCardHoriz array={data.modules.new_albums} name="New Albums" />
</div>

<style>
  @media (max-width: 1200px) {
    div.logo {
      margin-top: 2rem;
    }
  }
</style>
