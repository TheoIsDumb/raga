<script>
  import { active, currentPlaylist, index } from "$lib/store";

  import OptionsIcon from '$lib/icons/OptionsIcon.svelte'
  import Options from '$lib/components/Options.svelte'

  let OptionsVisible;
  let selectedOption;
  
  let selected;

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
  <div class="song_container cursor-pointer flex">
    <div class="song flex hover items-center w-full overflow-hidden gap-2 rounded" on:click={() => {
      if (type === "song") {
        playSong(item);
      } else if (type === "album") {
        playSongFromAlbum(item, i);
      }
      }}>
    <img class="rounded h-14" src={item.image} alt={item.title}/>

    <div class="info flex flex-col w-full overflow-hidden">
      <div class="title font-bold">{@html item.title}</div>
      <div class="subtitle text-gray-400 text-xs">{@html item.subtitle}</div>
    </div>
  </div>

  {#if type === "song" || type === "album"}
    <button
    on:click={() => {
      OptionsVisible = true
      selectedOption = item
    }}
    class="options empty hover w-8 rounded justify-center items-center">
      <OptionsIcon />
    </button>
  {/if}
</div>
{/each}

{#if OptionsVisible}
  <Options bind:OptionsVisible item={selectedOption}/>
{/if}

<style>
  .title, .subtitle { @apply truncate; }
</style>