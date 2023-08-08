<script>
    import { historyEnabled, accentColor } from '$lib/store'

    $: console.log($accentColor)
</script>

<div class="flex flex-col gap-2">
    <h1 class="font-bold text-3xl mb-4">settings</h1>

    <label class="text-xl" for="history">enable history
        <input class="ml-4 w-5 h-5" type="checkbox" bind:checked={$historyEnabled} name="history" id="history">
    </label>

    <div class="flex items-center">
        <span class="text-xl mr-4">accent color</span>

        <div class="colors flex gap-2">
            {#each ["orange-500", "blue-500", "rose-500"] as i}
                <button class="h-8 w-8 rounded-full bg-{i}"
                on:click={() => $accentColor = i}/>
            {/each}
        </div>
    </div>
</div>