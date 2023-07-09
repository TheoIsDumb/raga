<script>
  export let data;
  import SongCardHoriz from "$lib/components/cards/SongCardHoriz.svelte";
  import AlbumCardHoriz from "$lib/components/cards/AlbumCardHoriz.svelte";
</script>

<div class="inner flex flex-dirc">
  <div class="header flex flex-ac">
    <img loading="lazy" src={data.image} alt={data.name} />
    <div class="artistinfo flex flex-dirc">
      <span style:font-weight="bold">{data.name}</span>
      <span style:font-size="0.8rem">{data.subtitle}</span>
      <span style:font-size="0.8rem">Followers: {data.follower_count}</span>
    </div>
  </div>

  {#if data.topSongs.length !== 0}
    <div class="scroll_container">
      <h1 class="play">Top Songs</h1>
      <div class="hscroll">
        {#each data.topSongs as item}
          <SongCardHoriz
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            enc={item.more_info.encrypted_media_url}
            kbps320={item.more_info["320kbps"]}
          />
        {/each}
      </div>
    </div>
  {/if}

  {#if data.singles.length !== 0}
    <div class="scroll_container">
      <h1 class="play">Singles</h1>
      <div class="hscroll">
        {#each data.singles as item}
          <SongCardHoriz
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            enc={item.more_info.encrypted_media_url}
            kbps320={item.more_info["320kbps"]}
          />
        {/each}
      </div>
    </div>
  {/if}

  {#if data.topAlbums.length !== 0}
    <AlbumCardHoriz name="Top Albums" array={data.topAlbums} />
  {/if}
</div>

<style>
  .header {
    gap: 1rem;
    justify-content: space-between;
  }
  .header img {
    border-radius: 0.3rem;
    height: 150px;
    width: 150px;
  }
  .artistinfo {
    text-align: right;
  }
</style>
