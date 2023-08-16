<script>
	import { audioVolume, audioMuted } from '$lib/store'
    import Speaker from '$lib/icons/Speaker.svelte';
    import Muted from '$lib/icons/Muted.svelte';

	$: percentage = ($audioVolume/1) * 100;

    function mutetoggle() {
        $audioMuted = !$audioMuted
    }
</script>
<div class="volume flex justify-center items-center gap-1 w-1/3">
    <button class="empty" on:click={mutetoggle}>
        {#if !$audioMuted}
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
        bind:value={$audioVolume}
        style="--value: {percentage.toString() + "%"}"
    />
</div>