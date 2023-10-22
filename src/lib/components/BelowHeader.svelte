<script>
  import { query, accentColor } from "$lib/store"
  import { page } from "$app/stores"

  let btns = ["Songs", "Albums", "Artists", "Playlists"]

  $: pathname = $page.url.pathname
</script>

<div class="belowheader flex xl:hidden w-full border-2 border-{$accentColor} mb-2">
  {#each btns as btn}
    <a href={"/search/" + btn.toLowerCase() + '?q=' + $query}
        class="{pathname.includes(btn.toLowerCase()) ? `bg-${$accentColor} text-white` : 'bg-transparent' }
        text-sm flex-1 flex justify-center items-center border-0 p-1 cursor-pointer transition duration-300">
        {btn}
    </a>
  {/each}
</div>