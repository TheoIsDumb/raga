<script>
  export let data;
  import { fade } from "svelte/transition";
  import PlaylistCardHoriz from "$lib/components/PlaylistCardHoriz.svelte";
  import AlbumCardHoriz from "$lib/components/AlbumCardHoriz.svelte";
  import Logo from "$lib/icons/Logo.svelte";
</script>

<div class="inner flex flex-dirc" in:fade>
  <div class="flex flex-jc flex-ac">
    <Logo />
  </div>

  <h1 class="play">Charts</h1>
  <div class="hscroll">
    {#each data.modules.charts as item}
      <PlaylistCardHoriz id={item.id} title={item.title} image={item.image} />
    {/each}
  </div>

  <h1 class="play">Top Playlists</h1>
  <div class="hscroll">
    {#each data.modules.top_playlists as item}
      <PlaylistCardHoriz id={item.id} title={item.title} image={item.image} />
    {/each}
  </div>

  <h1 class="play">New Albums</h1>
  <div class="hscroll">
    {#each data.modules.new_albums as item}
      <AlbumCardHoriz id={item.id} title={item.title} image={item.image} />
    {/each}
  </div>
</div>
