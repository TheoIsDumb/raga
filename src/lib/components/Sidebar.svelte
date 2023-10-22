<script>
  import SidebarMenu from './SidebarMenu.svelte'

  import Logo2 from '$lib/icons/Logo2.svelte'
  import Github from '$lib/icons/Github.svelte'
</script>

<div class="sidebar w-14 h-full flex py-4 pl-1 fixed top-0 left-0 flex-col items-center gap-4">
    <a href="/" class="block h-8 w-8"><Logo2/></a>

    <SidebarMenu />

    <a href="https://github.com/theoisdumb/raga"
      class="block h-8 w-8 mt-auto"
      target="_blank" rel="noreferrer">
      <Github />
    </a>
</div>