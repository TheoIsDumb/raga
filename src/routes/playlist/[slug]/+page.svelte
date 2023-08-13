<script>
  export let data;
  import SongCard from "$lib/components/cards/SongCard.svelte";
  import Enqueue from "$lib/components/Enqueue.svelte";
</script>

<div class="inner flex flex-col">
  <div class="header flex items-center justify-between">
    <img class="h-[150px] w-[150px] rounded" loading="lazy" src={data.image} alt={data.title} />
    <div class="info flex flex-col text-right">
      <span class="font-bold">{data.title}</span>
      <span class="text-sm">{data.subtitle}</span>
      <span class="text-sm">{data.header_desc}</span>

      <Enqueue list={data.list}/>
    </div>
  </div>

  <SongCard type="album" list={data.list}/>
</div>