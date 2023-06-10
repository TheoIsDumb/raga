<script>
  import { truncate } from "$lib/utils";
  import { goto } from "$app/navigation";

  export let id;
  export let title;
  export let subtitle;
  export let image;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="item"
  on:click={() => {
    goto(`/album/${id}`);
  }}
>
  <div class="iteminner flex flex-dirc">
    <img src={image.replace("150x150", "500x500")} alt={title} />
    <span style:font-size="0.7rem" style:font-weight="bold">
      {truncate(title, 20)}
    </span>
    <span style:font-size="0.7rem">{truncate(subtitle, 20)} </span>
  </div>
</div>

<style>
  .item {
    display: inline-block;
    border-radius: 0.3rem;
    height: 9rem;
    width: 8rem;
    margin-left: 0.2rem;
  }
  .item img {
    width: 100%;
    border-radius: 0.3rem;
  }
  .iteminner {
    gap: 0.5rem;
  }
</style>
