<script>
  export let data;
  import { fly } from "svelte/transition";
  import SongCardHoriz from "$lib/components/SongCardHoriz.svelte";
  import AlbumCardHoriz from "$lib/components/AlbumCardHoriz.svelte";
</script>

<pre>{JSON.stringify(data, null, 2)}</pre>

<div class="inner flex flex-dirc" transition:fly>
  <div class="header flex flex-ac">
    <img src={data.artist.image} alt={data.artist.name} />
    <div class="artistinfo flex flex-dirc">
      <span style:font-weight="bold">{data.artist.name}</span>
      <span style:font-size="0.8rem">{data.artist.subtitle}</span>
      <span style:font-size="0.8rem"
        >Followers: {data.artist.follower_count}</span
      >
    </div>
  </div>

  <h1>Top Songs</h1>
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

  <h1>Singles</h1>
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

  <h1>Albums</h1>
  <div class="hscroll">
    {#each data.artist.topAlbums as item}
      <AlbumCardHoriz
        id={item.id}
        title={item.title}
        subtitle={item.subtitle}
        image={item.image}
      />
    {/each}
  </div>
</div>

<style>
  .header {
    gap: 1rem;
    border-bottom: 1px solid gray;
    justify-content: space-between;
  }
  .artistinfo {
    text-align: right;
  }
  h1 {
    margin: 0;
    text-transform: lowercase;
    margin-bottom: -1rem;
  }
  h1:nth-of-type(even) {
    text-align: right;
  }
</style>
