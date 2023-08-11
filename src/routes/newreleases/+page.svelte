<script>
  export let data
  let results = data.data
  import { goto } from '$app/navigation';
</script>

<h1 class="font-bold text-3xl">new releases</h1>

<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-2 gap-2">
    {#each results as item}
      <div
        class="item"
        on:click={() => {
          if (item.type === "album") {
            goto(`/album/${item.id}`);
          } else if (item.type === "playlist") {
            goto(`/playlist/${item.id}`);
          } else if (item.type === "song") {
            goto(`song/${item.id}`)
          }
        }}
      >
        <div class="iteminner flex flex-col hover gap-2">
          <img
            class="rounded aspect-square object-cover"
            loading="lazy"
            src={item.image.replace("150x150", "500x500").replace('c.saavncdn.com', 'proxy.raga.vkdbois.xyz/media')}
            alt={item.title}
          />
          <span class="truncate text-xs font-bold">{@html item.title}</span>
        </div>
      </div>
    {/each}
</div>