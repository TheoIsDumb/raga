<script>
  export let data;
  import { fly } from "svelte/transition";
  import Card from "$lib/components/Card.svelte";
</script>

<div class="inner flex flex-dirc" transition:fly>
  {#each data.searchDetails as datum}
    <Card
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
