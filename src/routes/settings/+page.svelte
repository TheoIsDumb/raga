<script>
    import { historyEnabled } from '$lib/store'
</script>

<div>
    <h1 class="font-bold text-3xl mb-4">settings</h1>
    <label for="history">History:
        <input type="checkbox" bind:checked={$historyEnabled} name="history" id="history">
    </label>
</div>