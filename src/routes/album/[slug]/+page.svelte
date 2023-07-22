<script>
  export let data
  import "$lib/styles/playlistheader.css"
  import AlbumSongCard from "$lib/components/cards/AlbumSongCard.svelte"
</script>

<div class="inner flex flex-dirc">
  <div class="header flex flex-ac">
    <img loading="lazy" src={data.image} alt={data.title} />
    <div class="info flex flex-dirc">
      <span style:font-weight="bold">{@html data.title}</span>
      <span style:font-size="0.8rem">{@html data.subtitle}</span>
      <span style:font-size="0.8rem">{@html data.header_desc}</span>
    </div>
  </div>

  <AlbumSongCard list={data.list} />
</div>