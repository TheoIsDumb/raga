<script>
	import { audioElement } from '$lib/store'
    import Speaker from '$lib/icons/Speaker.svelte';
    import Muted from '$lib/icons/Muted.svelte';

	let volume = 0.7;
	
	$: percentage = (volume/1) * 100;

	function setVolume() {
        // volume = Math.max(0, Math.min(1, volume));
        $audioElement.volume = volume;
    }

    function mutetoggle() {
        $audioElement.muted = !$audioElement.muted
    }
</script>
<div class="volume flex flex-jc flex-ac">
    <button class="empty" on:click={mutetoggle}>
        {#if !$audioElement.muted}
            <Speaker />
        {:else}
            <Muted />
        {/if}
    </button>

    <input
        name="volume"
        type="range"
        min="0"
        max="1"
        step="0.1"
        bind:value={volume}
        on:input={setVolume}
        style="--value: {percentage.toString() + "%"}"
    />
</div>

 <style>
    div.volume {
        gap: 0.5rem;
        width: 30%;
    }
 </style>