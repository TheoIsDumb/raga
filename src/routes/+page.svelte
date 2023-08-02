<script>
  export let data;
  import HorizCard from "$lib/components/cards/HorizCard.svelte";
</script>

<div class="inner flex flex-dirc">
  <div class="logo flex flex-jc flex-ac">
    <h1>raga.</h1>
  </div>

  <HorizCard type="playlist" array={data.charts} name="Charts" />
  <HorizCard type="playlist" array={data.top_playlists} name="Top Playlists" />
  <HorizCard type="album" array={data.new_albums} name="New Albums" />
</div>
