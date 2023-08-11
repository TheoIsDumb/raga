<script>
    import { fade } from 'svelte/transition'
    import { currentPlaylist, index, accentColor } from '$lib/store'
    import { page } from '$app/stores'; 
    import PlayNext from '$lib/icons/PlayNext.svelte'

    export let OptionsVisible;
    export let item;

    let copyButtonText = "Copy Link"
    let playNextButtonText = "Play Next"

    let copy = async () => {
		try {
      await navigator.clipboard.writeText(`${$page.url.origin}/song/${item.id}`);
			copyButtonText = "✓ Copied!"
			setTimeout(() => copyButtonText = "Copy", 1500)
        } catch (err) {
        console.error('Failed to copy: ', err);
        }
	}

    let playNext = () => {
        if ($currentPlaylist.some((i) => i.id === item.id) === false) {
            $currentPlaylist.splice($index+1, 0, item)

            playNextButtonText = "✓ Up Next!"
            setTimeout(() => playNextButtonText = "Play Next", 1500)
        } else {
            playNextButtonText = "🗙 Song already in list."
            setTimeout(() => playNextButtonText = "Play Next", 1500)
        }
    }

    function close(e) {
    if (e.key === "Escape") {
      OptionsVisible = false;
    }
  }
</script>

<div class="fullscreen backdrop-blur-sm w-[100dvw] h-[100dvh] fixed top-0 left-0 flex justify-center items-center z-10"
    on:click|self={() => OptionsVisible = false}
    transition:fade>
    <div class="options rounded p-2 flex flex-col gap-2 w-11/12 max-w-screen-md">
        <div class="flex justify-between items-center">
            <img src={item.image.replace('c.saavncdn.com', 'proxy.raga.vkdbois.xyz/media')} alt={item.title}/>

            <div class="text-right">
                <div class="font-bold">{@html item.title}</div>
                <div class="text-gray-400 text-sm">{@html item.subtitle.split('-')[0]}</div>
                <div class="text-gray-400 text-sm">{@html item.subtitle.split('-')[1]}</div>
            </div>
        </div>

        <div class="flex flex-col gap-2">
        <button class="flex items-center w-full bg-transparent rounded cursor-pointer justify-between p-2 border-2 border-solid border-{$accentColor} text-{$accentColor}" on:click={copy}>
            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9.25 3.5A1.75 1.75 0 0 0 7.5 5.25v1a.75.75 0 0 1-1.5 0v-1A3.25 3.25 0 0 1 9.25 2h1a.75.75 0 0 1 0 1.5h-1ZM12 2.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm.75 13.75a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Zm-6-8.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 6.75 8ZM22 8.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0v-2.5Zm-3.25 7.75a1.75 1.75 0 0 0 1.75-1.75v-1a.75.75 0 0 1 1.5 0v1A3.25 3.25 0 0 1 18.75 18h-1a.75.75 0 0 1 0-1.5h1ZM20.5 5.25a1.75 1.75 0 0 0-1.75-1.75h-1a.75.75 0 0 1 0-1.5h1A3.25 3.25 0 0 1 22 5.25v1a.75.75 0 0 1-1.5 0v-1ZM9.25 16.5a1.75 1.75 0 0 1-1.75-1.75v-1a.75.75 0 0 0-1.5 0v1A3.25 3.25 0 0 0 9.25 18h1a.75.75 0 0 0 0-1.5h-1ZM2 9.25a3.25 3.25 0 0 1 3-3.24v1.508A1.75 1.75 0 0 0 3.5 9.25v7a4.25 4.25 0 0 0 4.25 4.25h7a1.75 1.75 0 0 0 1.732-1.5h1.509a3.25 3.25 0 0 1-3.241 3h-7A5.75 5.75 0 0 1 2 16.25v-7Z"/></svg>
            {copyButtonText}</button>

        <button class="flex items-center w-full bg-transparent rounded cursor-pointer justify-between p-2 border-2 border-solid border-{$accentColor} text-{$accentColor}" on:click={playNext}>
            <PlayNext/>
            {playNextButtonText}</button>
        </div>
    </div>
</div>

<svelte:window on:keydown={close}/>

<style>
  .fullscreen { background-color: #000000c4; }
  .options { background-color: #131313; }
</style>