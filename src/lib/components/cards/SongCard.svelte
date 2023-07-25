<script>
  import { active, currentPlaylist, index } from "$lib/store";
  import PlayNext from "$lib/icons/PlayNext.svelte";

  export let list = [];
  export let type;

  async function playSong(item) {
      $currentPlaylist = [item];
      $index = 0;
      $active = $currentPlaylist[$index];

      const resp = await fetch(`/api/reco?songid=${$active.id}`);

      const addData = await resp.json();

      addData.forEach((song) => {
        $currentPlaylist.push(song);
      });
      $currentPlaylist = $currentPlaylist;
    }

  function playSongFromAlbum(item, i) {
      if (list.length !== 0) {
        $currentPlaylist = list;
      } 

      $index = i
      $active = $currentPlaylist[$index]
  }
</script>

{#each list as item, i}
  <div class="song_container flex">
    <div class="song flex hover flex-ac" on:click={() => {
      if (type === "song") {
        playSong(item);
      } else if (type === "album") {
        playSongFromAlbum(item, i);
      }
      }}>
    <img src={item.image} alt={item.title}/>

    <div class="info flex flex-jc flex-dirc">
      <div class="title">{@html item.title}</div>
      <div class="subtitle">{@html item.subtitle}</div>
    </div>
  </div>

  {#if type === "song" || type === "album"}
  <button class="empty" on:click={() => $currentPlaylist.splice($index+1, 0, item)}>
    <PlayNext />
  </button>
  {/if}
</div>
{/each}

<style>
  .song_container {
    width: 100%;
    gap: 0.5rem;
  }
  .song {
    width: 100%;
    overflow: hidden;
    gap: 0.5rem;
    border-radius: 0.3rem;
  }
  .song img {
    border-radius: 0.2rem;
    height: 3.5rem;
  }
  .info {
    width: 100%;
    overflow: hidden;
  }
  .title {
    font-weight: bold;
  }
  .subtitle {
    color: gray;
    font-size: 0.7rem;
  }
  .title, .subtitle {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>