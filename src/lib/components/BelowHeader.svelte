<script>
  import { query, accentColor } from "$lib/store"
  import { page } from "$app/stores"
  import { buttonsArray } from '$lib/utils'

  $: pathname = $page.url.pathname
</script>

<div class="belowheader flex xl:hidden w-full border-2 border-{$accentColor} mb-2">
  {#each buttonsArray as btn}
    <button
      class="{pathname.includes(btn.name.toLowerCase()) ? `bg-${$accentColor} text-white` : 'bg-transparent' }
      text-sm flex-1 border-0 p-1 cursor-pointer transition duration-300"
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