<script>
  import { truncate } from "$lib/utils";
  import { active, currentPlaylist } from "$lib/store";
  import "$lib/styles/horizcard.css"

  export let item;

  function play(item) {
    $active = item;
    $currentPlaylist = [$active];
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="item"
  on:click={() => {
    play(item);
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