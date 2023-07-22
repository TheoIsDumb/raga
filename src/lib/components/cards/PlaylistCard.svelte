<script>
  import { goto } from "$app/navigation"
  import "$lib/styles/play_artist_card.css"

  export let id;
  export let title;
  export let image;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="playcard flex hover"
  on:click={() => {
    goto(`/playlist/${id}`);
  }}
>
  <img loading="lazy" src={image} alt={title} />

  <div class="title">{@html title}</div>
</div>