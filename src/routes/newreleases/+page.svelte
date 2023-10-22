<script>
  export let data
  let results = data.data

  const produceLink = (type, id) => {
    if (type === "album") {
      return `/album/${id}`
    } else if (type === "playlist") {
      return `/playlist/${id}`
    } else if (type === "song") {
      return `song/${id}`
    }
  }
</script>

<h1 class="font-bold text-3xl">new releases</h1>

<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-2 gap-2">
    {#each results as item}
      <a class="item" href={produceLink(item.type, item.id)}>
        <div class="iteminner flex flex-col hover gap-2">
          <img class="rounded aspect-square object-cover"
            loading="lazy" src={item.image} alt={item.title}/>
          <span class="truncate text-xs font-bold">{@html item.title}</span>
        </div>
      </a>
    {/each}
</div>