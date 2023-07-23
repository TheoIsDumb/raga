<script>
  export let data;
  import HorizCard from "$lib/components/cards/HorizCard.svelte";
  import Logo from "$lib/icons/Logo.svelte";
</script>

<div class="inner flex flex-dirc">
  <div class="logo flex flex-jc flex-ac">
    <Logo />
  </div>

  <HorizCard type="playlist" array={data.modules.charts} name="Charts" />
  <HorizCard type="playlist" array={data.modules.top_playlists} name="Top Playlists" />
  <HorizCard type="album" array={data.modules.new_albums} name="New Albums" />
</div>
