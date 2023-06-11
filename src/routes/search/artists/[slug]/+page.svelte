<script>
  import { goto } from "$app/navigation";
  export let data;
  import { slide } from "svelte/transition";

  function gotoartist(artistId) {
    goto(`/artist/${artistId}`);
  }
</script>

<div class="inner grid" in:slide>
  {#each data.artists.results as artist}
    <div
      class="artist flex flex-dirc"
      on:click={gotoartist(artist.id)}
      on:keypress={gotoartist(artist.id)}
    >
      <img
        loading="lazy"
        src={artist.image.replace("50x50", "500x500")}
        alt={artist.name}
      />

      <span style:text-align="center" style:font-weight="bold"
        >{artist.name}</span
      >
    </div>
  {/each}
</div>

<style>
  div.artist {
    padding: 0.5rem;
    background: var(--base-dark);
    border-radius: 0.3rem;
    cursor: pointer;
    gap: 0.5rem;
    transition: all 0.3s;
  }
  div.artist:hover {
    transform: scale(1.2);
    box-shadow: 0 0 1rem black;
  }
  img {
    width: 100%;
    border-radius: 50%;
  }
</style>
