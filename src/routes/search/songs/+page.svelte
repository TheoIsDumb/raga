<script>
  export let data;
  import SongCard from "$lib/components/cards/SongCard.svelte";
  import { query } from "$lib/store.js";

  let index = 1;
  let results = data.results;

  const loadMore = async (e) => {
    index++;

    const resp = await fetch(`/api/search/songs?q=${$query}&index=${index}`);

    const addData = await resp.json();

    addData.results.forEach((song) => {
      results.push(song);
    });
    results = results;
  };

  const scrollHandler = async (e) => {
    if (index !== 10) {
      if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight) {
        loadMore();
      }
    }
  };
</script>

<div class="inner smol flex flex-dirc" on:scroll={scrollHandler}>
  {#each results as datum}
    <SongCard
      title={datum.title}
      subtitle={datum.subtitle}
      image={datum.image}
      enc={datum.more_info.encrypted_media_url}
      kbps320={datum.more_info["320kbps"]}
    />
  {/each}

  <button on:click={loadMore}>&darr;</button>
</div>

<style>
  button {
    background-color: transparent;
    border: 0;
    color: var(--fg);
    font-size: 2rem;
    cursor: pointer;
  }
  button:hover {
    filter: drop-shadow(0 0 1rem var(--fg));
  }
</style>
