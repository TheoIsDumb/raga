<script>
  import { truncate } from "$lib/utils";
  import { index } from "$lib/store";

  export let item;
  export let i;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="song flex hover"
  class:bleh={i === $index}
  on:click={() => ($index = i)}
>
  <img loading="lazy" src={item.image} alt={item.title} />

  <div class="info flex flex-dirc flex-jc">
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
  div#title,
  div#subtitle {
    font-weight: bold;
  }
  div#subtitle {
    font-size: 0.7rem;
    color: darkgray;
  }
  div.info {
    justify-content: start;
  }
  .bleh {
    border-left: 1rem solid dodgerblue;
  }
</style>
