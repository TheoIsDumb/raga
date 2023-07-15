<script>
  import { truncate } from "$lib/utils";
  import { active, currentPlaylist } from "$lib/store";

  export let item;

  async function play(item) {
    $active = item;
    $currentPlaylist = [$active];

    console.log($currentPlaylist);
    console.log($active.id);

    // const resp = await fetch(`/api/search/songs?q=${$query}&index=${index}`);

    // const addData = await resp.json();

    // addData.results.forEach((song) => {
    //   results.pushwolves at the gate(song);
    // });
    // results = results;
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="song flex hover"
  on:click={() => {
    play(item);
  }}
>
  <img loading="lazy" src={item.image} alt={item.title} />

  <div class="info flex flex-jc flex-dirc">
    <div id="title">{@html truncate(item.title, 50)}</div>
    <div id="subtitle">{@html truncate(item.subtitle, 50)}</div>
  </div>
</div>

<style>
  div.song {
    width: 100%;
    gap: 1rem;
    cursor: pointer;
    border-radius: 0.3rem;
  }
  div.song img {
    border-radius: 0.2rem;
    height: 3.5rem;
  }
  div#title {
    font-weight: bold;
  }
  div#subtitle {
    font-size: 0.7rem;
  }
</style>
