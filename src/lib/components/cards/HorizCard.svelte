<script>
  import { goto } from "$app/navigation";

  export let array;
  export let name;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="scroll_container">
  <h1 class="play m-0 lowercase font-bold text-2xl xl:text-3xl">{name}</h1>
  <div class="hscroll overflow-x-auto overflow-y-hidden whitespace-nowrap">
    {#each array as item}
      <div
        class="item inline-block mr-2 rounded"
        on:click={() => {
          if (item.type === "album") {
            goto(`/album/${item.id}`);
          } else if (item.type === "playlist") {
            goto(`/playlist/${item.id}`);
          } else if (item.type === "song") {
            goto(`/song/${item.id}`)
          }
        }}
      >
        <div class="iteminner flex flex-col hover gap-2 w-32 xl:w-40">
          <img
            class="rounded aspect-square object-cover h-32 xl:h-40"
            loading="lazy"
            src={item.image.replace("150x150", "500x500")}
            alt={item.title}
          />
          <span class="truncate text-xs font-bold">{@html item.title}</span>
        </div>
      </div>
    {/each}
  </div>
</div>