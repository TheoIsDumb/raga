<script>
  import Header from "$lib/components/Header.svelte";
  import Player from "$lib/components/Player.svelte";
  import "$lib/styles/app.css";
  import { active } from "$lib/store";
</script>

<main>
  <Header />
  <slot />
</main>

{#if Object.keys($active).length !== 0}
  <Player {...$active} />
{/if}
