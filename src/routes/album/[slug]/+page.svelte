<script>
  export let data
  import "$lib/styles/playlistheader.css"
  import SongCard from "$lib/components/cards/SongCard.svelte"
  import Enqueue from "$lib/components/Enqueue.svelte";
</script>

<div class="inner flex flex-col">
  <div class="header flex items-center">
    <img loading="lazy" src={data.image} alt={data.title} />
    <div class="info flex flex-col">
      <span class="font-bold">{@html data.title}</span>
      <span class="text-sm">{@html data.subtitle}</span>
      <span class="text-sm">{@html data.header_desc}</span>

      <Enqueue list={data.list}/>
    </div>
  </div>

  <SongCard type="album" list={data.list} />
</div>
