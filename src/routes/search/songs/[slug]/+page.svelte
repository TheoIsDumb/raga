<script>
  export let data;
  import { fade } from "svelte/transition";
  import SongCard from "$lib/components/SongCard.svelte";
  import { query } from "$lib/store";
</script>

<div class="inner flex flex-dirc" in:fade>
  {#each data.searchDetails as datum}
    <SongCard
      title={datum.title}
      subtitle={datum.subtitle}
      image={datum.image}
      enc={datum.more_info.encrypted_media_url}
      kbps320={datum.more_info["320kbps"]}
    />
  {/each}

  <span class="pagination">
    {#if data.index > 1}
      <a href="/search/songs/{$query}&index={Number(data.index) - 1}">
        previous
      </a>
    {/if}

    <a href="/search/songs/{$query}&index={Number(data.index) + 1}">next</a>
  </span>
</div>

<style>
  div.inner {
    gap: 1rem;
  }
  .pagination a {
    color: var(--fg);
    text-decoration: none;
    padding: 0.2rem 0.8rem;
    border: 1px solid var(--fg);
    border-radius: 0.3rem;
    transition: all 0.3s;
  }
  .pagination a:hover {
    background-color: var(--fg);
    color: var(--bg);
  }
</style>
