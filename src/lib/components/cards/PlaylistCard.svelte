<script>
  import { goto } from "$app/navigation"

  export let id;
  export let title;
  export let image;
  export let type;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="flex w-full gap-4 cursor-pointer transition duration-300 rounded p-2 hover"
  on:click={() => {
    if (type === "artist") {
      goto(`/artist/${id}`) 
    } else if (type === "playlist") {
      goto(`/playlist/${id}`) 
    }
  }} >
  <img class="rounded-[50%] h-14" loading="lazy" src={image.replace('50x50', '150x150').replace('c.saavncdn.com', 'proxy.raga.vkdbois.xyz/media')} alt={title} />
  <div class="font-bold">{@html title}</div>
</div>