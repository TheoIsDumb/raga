<script>
  export let data;
  import PlaylistCard from "$lib/components/PlaylistCard.svelte";

  $: console.log(data);
</script>

<div class="inner flex flex-dirc">
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
