<script>
    export let item

    import { currentPlaylist, index } from "$lib/store"
    import OptionsIcon from '$lib/icons/OptionsIcon.svelte'
    import { page } from '$app/stores'
    import { fade } from "svelte/transition"

    let copyButtonText = "Copy Link"
    let playNextButtonText = "Play Next"

	let shown = false
	const show = () => shown = !shown

    async function copy(id) {
        try {
            await navigator.clipboard.writeText(`${$page.url.origin}/song/${id}`)
            copyButtonText = "✓ Copied!"
            setTimeout(() => copyButtonText = "Copy Link", 1500)
        } catch (err) {
            console.error('Failed to copy: ', err)
        }

        setTimeout(() => shown = !shown, 500)
    }

    async function playNext(item) {
        if ($currentPlaylist.some((i) => i.id === item.id) === false) {
            $currentPlaylist.splice($index+1, 0, item)

            playNextButtonText = "✓ Up Next!"
            setTimeout(() => playNextButtonText = "Play Next", 1500)
        } else {
            playNextButtonText = "🗙 Song already in list."
            setTimeout(() => playNextButtonText = "Play Next", 1500)
        }

        setTimeout(() => shown = !shown, 500)
    }
</script>

<div class="relative flex justify-center w-8">
    <button on:click={show}
    class="w-full flex justify-center items-center hover rounded transition duration-300">
        <OptionsIcon />
    </button>

    {#if shown}
        <div transition:fade class="absolute right-8 bg-zinc-900 text-white w-40 flex flex-col gap-2 rounded py-2">
            <button class="hover" on:click={() => copy(item.id)}>{copyButtonText}</button>
            <button class="hover" on:click={() => playNext(item)}>{playNextButtonText}</button>
        </div>
    {/if}
</div>