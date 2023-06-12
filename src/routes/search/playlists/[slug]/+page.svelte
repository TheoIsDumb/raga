<script>
  export let data;
  import { slide } from "svelte/transition";
  import PlaylistCard from "$lib/components/PlaylistCard.svelte";
</script>

<div class="inner flex flex-dirc" in:slide>
  {#each data.playlists as playlist}
    <PlaylistCard
      id={playlist.id}
      title={playlist.title}
      image={playlist.image}
    />
  {/each}
</div>

<style>
  div.inner {
    gap: 1rem;
  }
</style>
