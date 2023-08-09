<script>
  export let data;
  import HorizCard from "$lib/components/cards/HorizCard.svelte";
</script>

<div class="inner flex flex-col">
  <HorizCard array={data.charts} name="Charts" />
  <HorizCard array={data.top_playlists} name="Top Playlists" />
  <HorizCard array={data.new_albums} name="New Releases" />
</div>