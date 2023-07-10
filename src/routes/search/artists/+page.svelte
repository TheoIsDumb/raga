<script>
  import { goto } from "$app/navigation";
  export let data;

  function gotoartist(artistId) {
    goto(`/artist/${artistId}`);
  }
</script>

<div class="inner smol">
  {#each data.results as artist}
    <div
      class="artist flex hover"
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
    width: 100%;
    gap: 1rem;
    cursor: pointer;
    transition: all 0.3s;
    border-radius: 0.3rem;
    padding: 0.5rem;
  }
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
</style>
