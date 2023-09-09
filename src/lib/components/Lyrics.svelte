<script>
    import { active } from "$lib/store"
    import Spinner from "$lib/icons/Spinner.svelte"

    async function showLyrics() {
        if ($active.more_info.has_lyrics === "false") {
            return "No lyrics found."
        } else {
            const res = await fetch(`/api/lyrics?songid=${$active.id}`)
            const data = await res.json()

            if (res.ok) {
                return data.lyrics
            } else {
                throw new Error(data)
            }
        }
    }
</script>

<div class="scrollable overflow-auto font-bold text-center xl:text-left">
    {#key $active.id}
        {#await showLyrics()}
            <Spinner />
        {:then lyrics}
            <p class="m-0">{@html lyrics}</p>
        {:catch error}
            <p class="m-0">No lyrics found.</p>
        {/await}
    {/key}
</div>