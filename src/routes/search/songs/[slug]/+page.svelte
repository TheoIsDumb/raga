<script>
  export let data;
  import { fade } from "svelte/transition";
  import SongCard from "$lib/components/SongCard.svelte";
</script>

<div class="inner flex flex-dirc" transition:fade>
  {#each data.searchDetails as datum}
    <SongCard
      title={datum.title}
      subtitle={datum.subtitle}
      image={datum.image}
      enc={datum.more_info.encrypted_media_url}
      kbps320={datum.more_info["320kbps"]}
    />
  {/each}
</div>

<style>
  div.inner {
    gap: 1rem;
  }
</style>
