<script>
  import { truncate } from "$lib/utils";
  import { active, currentPlaylist, index } from "$lib/store";
  import "$lib/styles/horizcard.css"

  // export let item;
  export let list = [];

  async function play(item, i) {
    // if (list.length !== 0) {
    //   $currentPlaylist = list;
    // } 

    // $index = i
    // $active = $currentPlaylist[$index]
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
{#each list as item, i}
<div
  class="item"
  on:click={() => {
    play(item, i);
  }}
>
  <div class="iteminner flex flex-dirc hover">
    <img
      loading="lazy"
      src={item.image.replace("150x150", "500x500")}
      alt={item.title}
    />
    <span>
      {truncate(item.title, 20)}
    </span>
  </div>
</div>
{/each}