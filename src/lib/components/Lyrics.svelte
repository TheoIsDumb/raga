<script>
    import { active } from "$lib/store";
    import Spinner from "$lib/icons/Spinner.svelte";

    async function showLyrics() {
        if ($active.more_info.has_lyrics === "false") {
            return "No lyrics found.";
        } else {
            const res = await fetch(`/api/lyrics?songid=${$active.id}`);
            const data = await res.json();

            if (res.ok) {
                return data.lyrics;
            } else {
                throw new Error(data);
            }
        }
    }
</script>

<div class="lyrics">
    {#key $active.id}
        {#await showLyrics()}
            <Spinner />
        {:then lyrics}
            <p>{@html lyrics}</p>
        {:catch error}
            <p>No lyrics found.</p>
        {/await}
    {/key}
</div>

<style>
    div.lyrics {
        overflow: auto;
        scrollbar-width: thin;
        margin: 2rem 0;
        font-weight: bold;
        width: 50%;
    }
</style>
