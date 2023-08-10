<script>
    import SongCard from "$lib/components/cards/SongCard.svelte";
    import { onMount } from 'svelte'

    let array = []

    onMount(() => {
        array = JSON.parse(localStorage.getItem('history')) || []
    })
</script>

<div class="flex flex-col gap-2">
{#if array.length === 0}
    <p>History is empty.</p>
{:else}
    <SongCard type="album" list={array}/>
{/if}
</div>