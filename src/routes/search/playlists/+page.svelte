<script>
  export let data;
  import PlaylistCard from "$lib/components/cards/PlaylistCard.svelte";
</script>

<div class="inner scrollable flex flex-dirc">
  {#each data.results as playlist}
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
