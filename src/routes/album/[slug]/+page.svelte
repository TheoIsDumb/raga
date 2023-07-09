<script>
  export let data;
  import SongCard from "$lib/components/cards/SongCard.svelte";
</script>

<div class="inner flex flex-dirc">
  <div class="albumheader flex flex-ac">
    <img loading="lazy" src={data.image} alt={data.title} />
    <div class="albuminfo flex flex-dirc">
      <span style:font-weight="bold">{data.title}</span>
      <span style:font-size="0.8rem">{data.subtitle}</span>
      <span style:font-size="0.8rem">{data.header_desc}</span>
    </div>
  </div>

  {#each data.list as item}
    <SongCard
      title={item.title}
      subtitle={item.subtitle}
      image={data.image}
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
