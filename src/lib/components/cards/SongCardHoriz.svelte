<script>
  import { truncate } from "$lib/utils";
  import { active, currentPlaylist } from "$lib/store";

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
    <span style:font-size="0.7rem" style:font-weight="bold">
      {truncate(item.title, 20)}
    </span>
  </div>
</div>

<style>
  .item {
    display: inline-block;
    border-radius: 0.3rem;
    height: 9rem;
    width: 8rem;
    margin-left: 0.2rem;
    transition: 0.3s;
  }
  .item img {
    width: 100%;
    border-radius: 0.3rem;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }
  .iteminner {
    gap: 0.5rem;
  }
</style>
