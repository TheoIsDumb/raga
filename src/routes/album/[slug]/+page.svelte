<script>
  export let data;
  import { fade } from "svelte/transition";
  import SongCard from "$lib/components/SongCard.svelte";
</script>

<div class="inner flex flex-dirc" in:fade>
  <div class="albumheader flex flex-ac">
    <img loading="lazy" src={data.album.image} alt={data.album.title} />
    <div class="albuminfo flex flex-dirc">
      <span style:font-weight="bold">{data.album.title}</span>
      <span style:font-size="0.8rem">{data.album.subtitle}</span>
      <span style:font-size="0.8rem">{data.album.header_desc}</span>
    </div>
  </div>

  {#each data.album.list as item}
    <SongCard
      title={item.title}
      subtitle={item.subtitle}
      image={data.album.image}
      enc={item.more_info.encrypted_media_url}
      kbps320={item.more_info["320kbps"]}
    />
  {/each}
</div>

<style>
  .albumheader {
    gap: 1rem;
    padding-bottom: 1rem;
    justify-content: space-between;
  }
  .albuminfo {
    text-align: right;
  }
</style>
