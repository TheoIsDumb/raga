<script>
  export let data;
  import { fade } from "svelte/transition";
  import PlaylistCardHoriz from "$lib/components/PlaylistCardHoriz.svelte";
  import Logo from "$lib/icons/Logo.svelte";
  import { charts, topPlaylists } from "$lib/store";

  $charts = data.modules.charts;
  $topPlaylists = data.modules.top_playlists;
</script>

<div class="inner flex flex-dirc" in:fade>
  <div class="flex flex-jc flex-ac">
    <Logo />
  </div>

  <h1 class="play">Charts</h1>
  <div class="hscroll">
    {#each $charts as item}
      <PlaylistCardHoriz id={item.id} title={item.title} image={item.image} />
    {/each}
  </div>

  <h1 class="play">Top Playlists</h1>
  <div class="hscroll">
    {#each $topPlaylists as item}
      <PlaylistCardHoriz id={item.id} title={item.title} image={item.image} />
    {/each}
  </div>
</div>
