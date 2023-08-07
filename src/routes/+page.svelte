<script>
  export let data;
  import HorizCard from "$lib/components/cards/HorizCard.svelte";
  import Logo2 from "$lib/icons/Logo2.svelte";
  import SidebarMenu from "$lib/components/SidebarMenu.svelte";
</script>

<div class="inner flex flex-col">
  <div class="mt-4 h-20 gap-2 flex flex-col justify-center items-center">
    <Logo2 />

    <h1 class="m-0 text-base font-bold">raga.</h1>
  </div>

  <div class="block xl:hidden">
    <SidebarMenu />
  </div>

  <HorizCard array={data.charts} name="Charts" />
  <HorizCard array={data.top_playlists} name="Top Playlists" />
  <HorizCard array={data.new_albums} name="New Releases" />
</div>