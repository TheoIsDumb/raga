<script>
  import { goto } from "$app/navigation";
  export let data;
  import { slide } from "svelte/transition";

  function gotoalbum(albumid) {
    goto(`/album/${albumid}`);
  }
  // id, title, subtitle, image, year
</script>

<div class="inner grid" in:slide>
  {#each data.albums.results as album}
    <div
      class="album flex flex-dirc"
      on:click={gotoalbum(album.id)}
      on:keypress={gotoalbum(album.id)}
    >
      <img
        loading="lazy"
        src={album.image.replace("150x150", "500x500")}
        alt={album.title}
      />

      <div class="info flex flex-dirc">
        <span style:font-weight="bold">{@html album.title}</span>
        <span style:font-size="0.8rem">{@html album.subtitle}</span>
        <span style:font-size="0.8rem">{album.year}</span>
      </div>
    </div>
  {/each}
</div>

<style>
  div.album {
    padding: 0.5rem;
    background-color: var(--base-dark);
    border-radius: 0.3rem;
    cursor: pointer;
  }
  img {
    width: 100%;
    border-radius: inherit;
  }
</style>
