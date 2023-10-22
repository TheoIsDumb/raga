<script>
    import { historyEnabled, quality } from '$lib/store'

    let bitrates = [
        { id: "Low", q: "_96" },
        { id: "Medium", q: "_160" },
        { id: "High", q: "_320" },
    ]
</script>

<div class="flex flex-col gap-4">
    <h1 class="font-bold text-3xl mb-4">settings</h1>

    <label class="text-xl flex justify-between" for="history">enable history
        <input class="w-6 h-6" type="checkbox" bind:checked={$historyEnabled} name="history" id="history">
    </label>

     <label for="quality" class="text-xl flex justify-between">streaming quality
        <select name="quality" id="quality" class="p-1 rounded" bind:value={$quality}>
            {#each bitrates as b}
                <option value={b.q}>{b.id}</option>
            {/each}
        </select> 
    </label>
</div>