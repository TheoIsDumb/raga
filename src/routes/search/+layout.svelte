<script>
  import BelowHeader from "$lib/components/BelowHeader.svelte";
</script>

<BelowHeader />
<slot />

<style>
  :global(.inner) {
    height: calc(100dvh - 9.5rem);
  }
</style>
