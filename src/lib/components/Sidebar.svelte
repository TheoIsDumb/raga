<script>
  import SidebarMenu from './SidebarMenu.svelte';
  import Logo2 from '$lib/icons/Logo2.svelte'
  import Github from '$lib/icons/Github.svelte'
</script>

<div class="bg-[#131313] w-0 xl:w-80 h-full fixed p-4 flex-col gap-4 hidden xl:flex shadow-inner">
    <a href="/" class="block h-8 w-8 mb-8"><Logo2/></a>

    <SidebarMenu />

    <a href="https://github.com/theoisdumb/raga"
      class="block h-8 w-8 mt-auto"
      target="_blank" rel="noreferrer">
      <Github />
    </a>
</div>