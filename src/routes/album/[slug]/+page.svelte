<script>
  export let data;
  import { fly } from "svelte/transition";
  import SongCard from "$lib/components/SongCard.svelte";

  // albumheader: title, subtitle, header_desc, image
  // list: title, subtitle, image, encrypted_media_url, 320kbps
</script>

<div class="inner flex flex-dirc" transition:fly>
  <!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->

  <div class="albumheader flex flex-ac">
    <img src={data.albums.image} alt={data.albums.title} />
    <div class="albuminfo flex flex-dirc">
      <span style:font-weight="bold">{data.albums.title}</span>
      <span style:font-size="0.8rem">{data.albums.subtitle}</span>
      <span style:font-size="0.8rem">{data.albums.header_desc}</span>
    </div>
  </div>

  {#each data.albums.list as item}
    <SongCard
      title={item.title}
      subtitle={item.subtitle}
      image={data.albums.image}
      enc={item.more_info.encrypted_media_url}
      kbps320={item.more_info["320kbps"]}
    />
  {/each}
</div>

<style>
  .albumheader {
    gap: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid gray;
    justify-content: space-between;
  }
  .albuminfo {
    text-align: right;
  }
</style>
