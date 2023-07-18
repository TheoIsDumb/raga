<script>
  import { goto } from "$app/navigation";
  export let data;
  import { query } from "$lib/store";

  function gotoalbum(albumid) {
    goto(`/album/${albumid}`);
  }
</script>

<div class="inner smol flex flex-dirc">
  <div class="grid">
    {#each data.results as album}
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
</div>

<style>
  div.album {
    padding: 0.5rem;
    background-color: var(--base-dark);
    border-radius: 0.3rem;
    cursor: pointer;
    transition: all 0.3s;
    gap: 0.5rem;
  }
  div.album:hover {
    background-color: var(--base);
  }
  img {
    width: 100%;
    border-radius: inherit;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }

  .grid {
    display: grid;
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 768px) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
