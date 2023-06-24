<script>
  export let data;
  import SongCardHoriz from "$lib/components/SongCardHoriz.svelte";
  import AlbumCardHoriz from "$lib/components/AlbumCardHoriz.svelte";
</script>

<pre>{JSON.stringify(data, null, 2)}</pre>

<div class="inner flex flex-dirc">
  <div class="header flex flex-ac">
    <img loading="lazy" src={data.artist.image} alt={data.artist.name} />
    <div class="artistinfo flex flex-dirc">
      <span style:font-weight="bold">{data.artist.name}</span>
      <span style:font-size="0.8rem">{data.artist.subtitle}</span>
      <span style:font-size="0.8rem"
        >Followers: {data.artist.follower_count}</span
      >
    </div>
  </div>

  <h1 class="play">Top Songs</h1>
  <div class="hscroll">
    {#each data.artist.topSongs as item}
      <SongCardHoriz
        title={item.title}
        subtitle={item.subtitle}
        image={item.image}
        enc={item.more_info.encrypted_media_url}
        kbps320={item.more_info["320kbps"]}
      />
    {/each}
  </div>

  <h1 class="play">Singles</h1>
  <div class="hscroll">
    {#each data.artist.singles as item}
      <SongCardHoriz
        title={item.title}
        subtitle={item.subtitle}
        image={item.image}
        enc={item.more_info.encrypted_media_url}
        kbps320={item.more_info["320kbps"]}
      />
    {/each}
  </div>

  <h1 class="play">Albums</h1>
  <div class="hscroll">
    {#each data.artist.topAlbums as item}
      <AlbumCardHoriz id={item.id} title={item.title} image={item.image} />
    {/each}
  </div>
</div>

<style>
  .header {
    gap: 1rem;
    justify-content: space-between;
  }
  .header img {
    border-radius: 0.3rem;
  }
  .artistinfo {
    text-align: right;
  }
</style>
