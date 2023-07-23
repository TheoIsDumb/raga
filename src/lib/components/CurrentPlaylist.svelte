<script>
    import { currentPlaylist } from "$lib/store";
    import SongCard from "$lib/components/cards/SongCard.svelte";
</script>

<div class="playlist scrollable flex flex-dirc">
    <SongCard type="current" list={$currentPlaylist} />
</div>

<style>
    div.playlist {
        overflow: auto;
        scrollbar-width: thin;
        gap: 0.5rem;
    }
</style>
