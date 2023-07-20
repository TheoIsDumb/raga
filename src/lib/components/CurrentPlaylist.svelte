<script>
    import { currentPlaylist } from "$lib/store";

    import CurrentSongCard from "$lib/components/cards/CurrentSongCard.svelte";
</script>

<div class="playlist flex flex-dirc">
    {#each $currentPlaylist as item, i}
        <CurrentSongCard {item} {i} />
    {/each}
</div>

<style>
    div.playlist {
        overflow: auto;
        scrollbar-width: thin;
        gap: 0.5rem;
    }
</style>
