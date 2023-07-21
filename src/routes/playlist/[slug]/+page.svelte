<script>
  export let data;
  import AlbumSongCard from "$lib/components/cards/AlbumSongCard.svelte";
</script>

<div class="inner flex flex-dirc">
  <div class="playlistheader flex flex-ac">
    <img loading="lazy" src={data.image} alt={data.title} />
    <div class="playlistinfo flex flex-dirc">
      <span style:font-weight="bold">{data.title}</span>
      <span style:font-size="0.8rem">{data.subtitle}</span>
      <span style:font-size="0.8rem">{data.header_desc}</span>
    </div>
  </div>

  <AlbumSongCard list={data.list}/>
</div>

<style>
  .playlistheader {
    height: 10rem;
    gap: 1rem;
    padding-bottom: 1rem;
    justify-content: space-between;
  }
  .playlistheader img {
    height: 150px;
    width: 150px;
    border-radius: 0.3rem;
  }
  .playlistinfo {
    text-align: right;
  }
</style>
