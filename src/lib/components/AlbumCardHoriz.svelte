<script>
  import { truncate } from "$lib/utils";
  import { goto } from "$app/navigation";

  export let array;
  export let name;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="scroll_container">
  <h1 class="play">{name}</h1>
  <div class="hscroll">
    {#each array as item}
      <div
        class="item"
        on:click={() => {
          goto(`/album/${item.id}`);
        }}
      >
        <div class="iteminner flex flex-dirc hover">
          <img
            loading="lazy"
            src={item.image.replace("150x150", "500x500")}
            alt={item.title}
          />
          <span style:font-size="0.7rem" style:font-weight="bold">
            {@html truncate(item.title, 20)}
          </span>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .item {
    display: inline-block;
    border-radius: 0.3rem;
    height: 9rem;
    width: 8rem;
    margin-left: 0.2rem;
    cursor: pointer;
  }
  .item img {
    width: 100%;
    border-radius: 0.3rem;
  }
  .iteminner {
    gap: 0.5rem;
  }
</style>
