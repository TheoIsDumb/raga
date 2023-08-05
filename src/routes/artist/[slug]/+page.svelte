<script>
  export let data;
  import "$lib/styles/playlistheader.css"
  import SongCardHoriz from "$lib/components/cards/SongCardHoriz.svelte";
  import HorizCard from "$lib/components/cards/HorizCard.svelte";
</script>

<div class="inner flex flex-col">
  <div class="header flex items-center">
    <img loading="lazy" src={data.image} alt={data.name} />
    <div class="info flex flex-col">
      <span class="font-bold">{data.name}</span>
      <span class="text-sm">{data.subtitle}</span>
      <span class="text-sm">Followers: {data.follower_count}</span>
    </div>
  </div>

  {#if data.topSongs.length !== 0}
    <div class="scroll_container">
      <h1 class="play">Top Songs</h1>
      <div class="hscroll">
          <SongCardHoriz list={data.topSongs} />
      </div>
    </div>
  {/if}

  {#if data.singles.length !== 0}
    <div class="scroll_container">
      <h1 class="play">Singles</h1>
      <div class="hscroll">
        <SongCardHoriz list={data.singles}/>
      </div>
    </div>
  {/if}

  {#if data.topAlbums.length !== 0}
    <HorizCard type="album" name="Top Albums" array={data.topAlbums} />
  {/if}
</div>