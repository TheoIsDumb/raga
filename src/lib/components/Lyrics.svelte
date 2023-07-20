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
    p {
        margin: 0;
    }
    .lyrics {
        height: 100%;
        overflow: auto;
        scrollbar-width: thin;
        font-weight: bold;
    }
    @media (max-width: 900px) {
        .lyrics {
            text-align: center;
        }
    }
</style>
