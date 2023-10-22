<script>
  import SidebarMenu from './SidebarMenu.svelte'
  import Logo2 from '$lib/icons/Logo2.svelte'
  import Github from '$lib/icons/Github.svelte'
</script>

<div class="sidebar bg-zinc-900 w-8 xl:w-80 h-full flex fixed top-0 left-0 p-4 flex-col gap-4">
    <a href="/" class="block h-8 w-8 mb-4"><Logo2/></a>

    <SidebarMenu />

    <a href="https://github.com/theoisdumb/raga"
      class="block h-8 w-8 mt-auto"
      target="_blank" rel="noreferrer">
      <Github />
    </a>
</div>