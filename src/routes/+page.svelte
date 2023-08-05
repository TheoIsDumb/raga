<script>
  export let data;
  import HorizCard from "$lib/components/cards/HorizCard.svelte";
  import Logo2 from "$lib/icons/Logo2.svelte";
</script>

<div class="inner flex flex-col">
  <div class="logo flex flex-col justify-center items-center mt-4 gap-4">
    <Logo2 />

    <h1 class="m-0 text-xl">raga.</h1>
  </div>

  <HorizCard type="playlist" array={data.charts} name="Charts" />
  <HorizCard type="playlist" array={data.top_playlists} name="Top Playlists" />
  <HorizCard type="album" array={data.new_albums} name="New Albums" />
</div>

<style>
  :global(.logo svg) { @apply h-16 w-16; }
</style>