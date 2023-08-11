<script>
    import { historyEnabled, accentColor } from '$lib/store'
</script>

<div class="flex flex-col gap-2">
    <h1 class="font-bold text-3xl mb-4">settings</h1>

    <label class="text-xl" for="history">enable history
        <input class="ml-4 w-5 h-5" type="checkbox" bind:checked={$historyEnabled} name="history" id="history">
    </label>

    <div class="flex items-center gap-8">
        <span class="text-xl">accent color</span>

        <div class="colors flex gap-2">
            {#each ["rose", "blue", "orange"] as i}
                <button class="h-8 w-8 rounded-full bg-{i}"
                on:click={() => $accentColor = i}/>
            {/each}
        </div>
    </div>
</div>