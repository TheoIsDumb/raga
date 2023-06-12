<script>
  import Sidebar from "$lib/components/Sidebar.svelte";
</script>

<div class="container">
  <Sidebar />

  <slot />
</div>

<style>
  @media (min-width: 1200px) {
    div.container {
      position: relative;
    }
  }
</style>
