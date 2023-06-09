<script>
  import Header from "$lib/components/Header.svelte";
  import Player from "$lib/components/Player.svelte";
  import "$lib/styles/app.css";
  import { active } from "$lib/store";

  import "@fontsource/inter-tight";
  import "@fontsource/inter-tight/400.css";
</script>

<main>
  <Header />
  <slot />
</main>

{#if Object.keys($active).length !== 0}
  <Player />
{/if}
