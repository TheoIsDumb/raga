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
  <SongCard type="song" list={results} />

  <button on:click={loadMore}>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M11.32 17.215c-.568 1.047-2.071 1.047-2.638 0l-6.5-12a1.5 1.5 0 0 1 1.32-2.213H16.5a1.5 1.5 0 0 1 1.319 2.214l-6.5 11.998Z"/></svg>
  </button>
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
