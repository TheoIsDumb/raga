<script>
  import { goto } from "$app/navigation";
  export let data;
  import { query } from "$lib/store";

  function gotoalbum(albumid) {
    goto(`/album/${albumid}`);
  }
</script>

<div class="inner flex flex-dirc">
  <div class="grid">
    {#each data.albums.results as album}
      <div
        class="album flex flex-dirc pop"
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

  <span class="pagination">
    {#if data.index > 1}
      <a href="/search/albums/{$query}&index={Number(data.index) - 1}">
        previous
      </a>
    {/if}

    <a href="/search/albums/{$query}&index={Number(data.index) + 1}">next</a>
  </span>
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
