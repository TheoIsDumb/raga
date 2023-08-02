<script>
  export let data;
  import HorizCard from "$lib/components/cards/HorizCard.svelte";
  import Logo2 from "$lib/icons/Logo2.svelte";
</script>

<div class="inner flex flex-dirc">
  <div class="logo flex flex-jc flex-ac flex-dirc">
    <Logo2 />

    <h1>raga.</h1>
  </div>

  <HorizCard type="playlist" array={data.charts} name="Charts" />
  <HorizCard type="playlist" array={data.top_playlists} name="Top Playlists" />
  <HorizCard type="album" array={data.new_albums} name="New Albums" />
</div>

<style>
  .logo {
    margin-top: 1rem;
    gap: 1rem;
  }
  :global(.logo svg) {
    height: 4rem;
    width: 4rem;
  }
  h1 {
    margin: 0;
  }
</style>