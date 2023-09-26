<script>
  import { SidebarVisible } from '$lib/store'
  import SidebarMenu from './SidebarMenu.svelte'
  import Logo2 from '$lib/icons/Logo2.svelte'
  import Github from '$lib/icons/Github.svelte'
  import { slide } from 'svelte/transition'
  import { onMount } from 'svelte'

  onMount(() => {
    if (window.innerWidth >= 1280) {
      $SidebarVisible = true
    }
  })
</script>

{#if $SidebarVisible}
  <div transition:slide class="sidebar bg-zinc-900 w-full xl:w-80 h-full flex fixed top-0 left-0 p-4 flex-col gap-4">
      <div class="flex justify-between items-center mb-4">
        <a href="/" class="block h-8 w-8"><Logo2/></a>
        <button class="h-8 w-8 text-2xl xl:hidden" on:click={() => $SidebarVisible = !$SidebarVisible}>✕</button>
      </div>

      <SidebarMenu />

      <a href="https://github.com/theoisdumb/raga"
        class="block h-8 w-8 mt-auto"
        target="_blank" rel="noreferrer">
        <Github />
      </a>
  </div>
{/if}