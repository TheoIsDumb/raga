<script>
  export let data
  import PlaylistCard from "$lib/components/cards/PlaylistCard.svelte"
</script>

<div class="inner flex flex-col">
  {#if data.message}
    <p>No results.</p>
  {:else}
    {#each data.results as playlist}
      <PlaylistCard type="playlist" id={playlist.id} title={playlist.title} image={playlist.image} />
    {/each}
  {/if}
</div>