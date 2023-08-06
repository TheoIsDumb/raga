<script>
  import { query } from "$lib/store";
  import { page } from "$app/stores";
  import { buttonsArray } from '$lib/utils'

  $: pathname = $page.url.pathname;
</script>

<div class="belowheader flex xl:hidden w-full border border-gainsboro mb-2">
  {#each buttonsArray as btn}
    <button
      class="{pathname.includes(btn.name.toLowerCase()) ? 'bg-[var(--fg)] text-[var(--base)]' : '' }
      text-xs flex-1 bg-transparent border-0 p-0.5 cursor-pointer transition duration-300"
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