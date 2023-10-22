<script>
  export let id
  export let title
  export let image
  export let type
</script>

<a
  class="flex w-full gap-4 cursor-pointer transition duration-300 rounded p-2 hover"
  href={type === "artist" ? `/artist/${id}` : `/playlist/${id}`}>
  <img class="rounded-[50%] h-14" loading="lazy" src={image} alt={title} />
  <div class="font-bold">{@html title}</div>
</a>