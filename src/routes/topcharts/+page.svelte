<script>
  export let data
  let results = data.results
</script>

<h1 class="font-bold text-3xl">top charts</h1>

<div class="grid grid-cols-2 md:grid-cols-3 mt-2 gap-2 md:gap-4">
    {#each results as item}
      <a class="item" href="/playlist/{item.id}">
        <div class="iteminner flex flex-col hover gap-2">
          <img
            class="rounded aspect-video object-cover"
            loading="lazy"
            src={item.image}
            alt={item.title}
          />
          <span class="truncate text-xs font-bold">{@html item.title}</span>
        </div>
      </a>
    {/each}
</div>