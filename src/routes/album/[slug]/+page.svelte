<script>
  export let data;
  import AlbumSongCard from "$lib/components/cards/AlbumSongCard.svelte";
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

  {#each data.list as item, index}
    <AlbumSongCard {item} {index} list={data.list} />
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
