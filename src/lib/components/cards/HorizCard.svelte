<script>
  export let array
  export let name

  const produceLink = (type, id) => {
    if (type === "album") {
      return `/album/${id}`
    } else if (type === "playlist") {
      return `/playlist/${id}`
    } else if (type === "song") {
      return `/song/${id}`
    }
  }
</script>

<div class="scroll_container">
  <h1 class="play m-0 lowercase font-bold text-2xl xl:text-3xl">{name}</h1>
  <div class="hscroll overflow-x-auto overflow-y-hidden whitespace-nowrap h-40 xl:h-[12rem]">
    {#each array as item}
      <a
        class="item inline-block mr-2 rounded"
        href={produceLink(item.type, item.id)}
      >
        <div class="iteminner flex flex-col hover gap-2 w-32 xl:w-40">
          <img
            class="rounded aspect-square object-cover w-32 xl:w-40"
            loading="lazy"
            src={item.image}
            alt={item.title}
          />
          <span class="truncate text-xs font-bold">{@html item.title}</span>
        </div>
      </a>
    {/each}
  </div>
</div>