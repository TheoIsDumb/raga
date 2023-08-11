<script>
  export let data;
  import HorizCard from "$lib/components/cards/HorizCard.svelte";
</script>

<div class="inner flex flex-col">
  <div class="header flex items-center justify-between">
    <img class="h-[150px] w-[150px] rounded" loading="lazy" src={data.image.replace('c.saavncdn.com', 'proxy.raga.vkdbois.xyz/media')} alt={data.name} />
    <div class="info flex flex-col text-right">
      <span class="font-bold">{data.name}</span>
      <span class="text-sm">{data.subtitle}</span>
      <span class="text-sm">Followers: {data.follower_count}</span>
    </div>
  </div>

  {#if data.topSongs.length !== 0}
    <HorizCard name="Top Songs" array={data.topSongs} />
  {/if}

  {#if data.singles.length !== 0}
    <HorizCard name="Singles" array={data.singles} />
  {/if}

  {#if data.topAlbums.length !== 0}
    <HorizCard name="Top Albums" array={data.topAlbums} />
  {/if}
</div>