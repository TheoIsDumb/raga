<script>
  export let data;
  import { slide } from "svelte/transition";
  import SongCard from "$lib/components/SongCard.svelte";
</script>

<div class="inner flex flex-dirc" in:slide>
  <div class="playlistheader flex flex-ac">
    <img loading="lazy" src={data.playlist.image} alt={data.playlist.title} />
    <div class="playlistinfo flex flex-dirc">
      <span style:font-weight="bold">{data.playlist.title}</span>
      <span style:font-size="0.8rem">{data.playlist.subtitle}</span>
      <span style:font-size="0.8rem">{data.playlist.header_desc}</span>
    </div>
  </div>

  {#each data.playlist.list as item}
    <SongCard
      title={item.title}
      subtitle={item.subtitle}
      image={item.image}
      enc={item.more_info.encrypted_media_url}
      kbps320={item.more_info["320kbps"]}
    />
  {/each}
</div>

<style>
  .playlistheader {
    height: 10rem;
    gap: 1rem;
    padding-bottom: 1rem;
    justify-content: space-between;
  }
  .playlistheader img {
    height: 100%;
  }
  .playlistinfo {
    text-align: right;
  }
</style>
