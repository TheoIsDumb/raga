<script>
  import { truncate } from "$lib/utils";
  import '$lib/styles/songcard.css';
  import { active, currentPlaylist, index } from "$lib/store";

  export let list = [];

  async function play(item, i) {
    if (list.length !== 0) {
      $currentPlaylist = list;
    } 

    $index = i
    $active = $currentPlaylist[$index]
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
{#each list as item, i}
<div class="song_container flex flex-ac">
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="song flex hover" on:click={() => { play(item, i); }}>
    <img loading="lazy" src={item.image} alt={item.title} />
  
    <div class="info flex flex-jc flex-dirc">
      <div id="title">{@html truncate(item.title, 50)}</div>
      <div id="subtitle">{@html truncate(item.subtitle, 50)}</div>
    </div>
  </div>
  
    <button class="next" title="add track after current track" on:click={() => $currentPlaylist.splice($index+1, 0, item)}>
      <svg class="glow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.4 10.6C16.55 9 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6Z"/></svg>
    </button>
  </div>
{/each}