<script>
    import { historyEnabled } from '$lib/store'
</script>

<div>
    <h1 class="font-bold text-3xl mb-4">settings</h1>
    <label class="text-xl" for="history">enable history
        <input class="ml-4 w-5 h-5" type="checkbox" bind:checked={$historyEnabled} name="history" id="history">
    </label>
</div>