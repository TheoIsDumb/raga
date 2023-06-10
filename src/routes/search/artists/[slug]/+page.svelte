<script>
  import { goto } from "$app/navigation";
  export let data;
  import { fly } from "svelte/transition";

  function gotoartist(artistId) {
    goto(`/artist/${artistId}`);
  }
</script>

<!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->

<div class="inner" transition:fly>
  {#each data.artists.results as artist}
    <div
      class="artist flex flex-dirc"
      on:click={gotoartist(artist.id)}
      on:keypress={gotoartist(artist.id)}
    >
      <img loading="lazy" src={artist.image.replace("50x50", "500x500")} alt={artist.name} />

      <span style:text-align="center" style:font-weight="bold"
        >{artist.name}</span
      >
    </div>
  {/each}
</div>

<style>
  div.inner {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
  div.artist {
    padding: 0.5rem;
    background: #2a2929;
    border-radius: 0.3rem;
    cursor: pointer;
    gap: 0.5rem;
  }
  img {
    width: 100%;
    border-radius: 50%;
  }
</style>
