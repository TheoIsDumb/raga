<script>
  import { goto } from "$app/navigation";

  export let id;
  export let title;
  export let image;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="playlist flex"
  on:click={() => {
    goto(`/playlist/${id}`);
  }}
>
  <img loading="lazy" src={image} alt={title} />

  <div id="title">{@html title}</div>
</div>

<style>
  div.playlist {
    width: 100%;
    gap: 1rem;
    cursor: pointer;
    transition: all 0.3s;
    border-radius: 0.3rem;
    padding: 0.5rem;
  }
  div.playlist:hover {
    background-color: var(--base);
  }
  div.playlist img {
    border-radius: 0.2rem;
    height: 3.5rem;
  }
  div#title {
    font-weight: bold;
  }
</style>
