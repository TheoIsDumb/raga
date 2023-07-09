<script>
  export let data;
  import SongCard from "$lib/components/cards/SongCard.svelte";
  import { query } from "$lib/store.js";

  let index = 1;
  let results = data.results;

  const loadMore = async (e) => {
    if (index !== 10) {
      if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight) {
        index++;

        const response = await fetch(
          `/api/search/songs?q=${$query}&index=${index}`
        );

        const addData = await response.json();

        addData.results.forEach((song) => {
          results.push(song);
        });
        results = results;
      }
    }
  };
</script>

<div class="inner scrollable flex flex-dirc" on:scroll={loadMore}>
  {#each results as datum}
    <SongCard
      title={datum.title}
      subtitle={datum.subtitle}
      image={datum.image}
      enc={datum.more_info.encrypted_media_url}
      kbps320={datum.more_info["320kbps"]}
    />
  {/each}
</div>
