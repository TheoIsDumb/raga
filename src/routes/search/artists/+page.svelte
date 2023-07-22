<script>
  import { goto } from "$app/navigation"
  import "$lib/styles/play_artist_card.css"
  export let data

  function gotoartist(artistId) {
    goto(`/artist/${artistId}`);
  }
</script>

<div class="inner smol">
  {#each data.results as artist}
    <div
      class="playcard flex hover"
      on:click={gotoartist(artist.id)}
      on:keypress={gotoartist(artist.id)}
    >
      <img
        loading="lazy"
        src={artist.image.replace("50x50", "150x150")}
        alt={artist.name}
      />

      <div class="title">{@html artist.name}</div>
    </div>
  {/each}
</div>

<style>
  img { border-radius: 50% !important; }
</style>