<script>
  import Logo2 from '$lib/icons/Logo2.svelte'
  import Github from '$lib/icons/Github.svelte'
  import { buttonsArray } from '$lib/utils'
  import { page } from '$app/stores'
  import { query } from '$lib/store'

  $: pathname = $page.url.pathname;
</script>

<div class="bg-[#131313] w-0 xl:w-1/4 h-full fixed p-4 flex-col justify-between hidden xl:flex shadow-inner">
    <a href="/" class="block h-8 w-8"><Logo2/></a>

    {#if $page.url.pathname.includes("search")}
      <div class="flex flex-col items-start gap">
        <span class="text-orange-400 underline mb-2">Search For</span>
        {#each buttonsArray as btn}
          <button
            class="{pathname.includes(btn.name.toLowerCase()) ? 'text-orange-500' : '' }"
            on:click={() => {
              if ($query !== "") {
                btn.function()
              }
            }}
          >
          {btn.name}
          </button>
        {/each}
      </div>
    {/if}

    <a href="https://github.com/theoisdumb/raga"
      class="block h-8 w-8"
      target="_blank" rel="noreferrer">
      <Github />
    </a>
</div>