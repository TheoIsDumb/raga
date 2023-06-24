<script>
  import Header from "$lib/components/Header.svelte";
  import Player from "$lib/components/Player.svelte";
  import Spinner from "$lib/icons/Spinner.svelte";
  import "$lib/styles/app.css";

  import { active } from "$lib/store";
  import { navigating } from "$app/stores";
  import { fly } from "svelte/transition";

  import "@fontsource/inter-tight";
  import "@fontsource/inter-tight/400.css";

  export let data;
</script>

<main>
  <Header />

  {#key data}
    <div in:fly={{ x: 50, duration: 500 }} out:fly={{ x: -50 }}>
      {#if $navigating}
        <Spinner />
      {:else}
        <slot />
      {/if}
    </div>
  {/key}
</main>

{#if Object.keys($active).length !== 0}
  <Player />
{/if}
