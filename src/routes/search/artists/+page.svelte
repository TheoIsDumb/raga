<script>
  export let data
  import PlaylistCard from '$lib/components/cards/PlaylistCard.svelte'
</script>

<div class="inner">
  {#each data.results as artist}
    <PlaylistCard type="artist" id={artist.id} title={artist.name} image={artist.image}/>
  {/each}
</div>