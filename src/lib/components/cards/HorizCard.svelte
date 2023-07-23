<script>
  import { truncate } from "$lib/utils";
  import { goto } from "$app/navigation";
  import "$lib/styles/horizcard.css"

  export let array;
  export let name;
  export let type;

  //album
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="scroll_container">
  <h1 class="play">{name}</h1>
  <div class="hscroll">
    {#each array as item}
      <div
        class="item"
        on:click={() => {
          if (type === "album") {
            goto(`/album/${item.id}`);
          } else if (type === "playlist") {
            goto(`/playlist/${item.id}`);
          }
        }}
      >
        <div class="iteminner flex flex-dirc hover">
          <img
            loading="lazy"
            src={item.image.replace("150x150", "500x500")}
            alt={item.title}
          />
          <span>{@html truncate(item.title, 20)}</span>
        </div>
      </div>
    {/each}
  </div>
</div>