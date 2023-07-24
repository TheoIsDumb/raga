<script>
  import { active, currentPlaylist, index } from "$lib/store";

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
    <svg on:click={() => $currentPlaylist.splice($index+1, 0, item)}
    class="hover" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.4 10.6C16.55 9 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6Z"/></svg>
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
  svg {
    height: auto;
    margin-left: auto;
    padding: 0.1rem;
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