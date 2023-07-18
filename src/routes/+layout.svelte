<script>
  import Header from "$lib/components/Header.svelte";
  import Player from "$lib/components/Player.svelte";
  import Spinner from "$lib/icons/Spinner.svelte";
  import BelowHeader from "$lib/components/BelowHeader.svelte";
  import BiggerPlayer from "$lib/components/BiggerPlayer.svelte";
  import "$lib/styles/app.css";

  import { active, BiggerPlayerVisible } from "$lib/store";
  import { navigating } from "$app/stores";
  import { fade } from "svelte/transition";
  import { page } from "$app/stores";

  import "@fontsource/inter-tight";
  import "@fontsource/inter-tight/400.css";
  import { MetaTags } from "svelte-meta-tags";

  export let data;
</script>

<MetaTags title="paattu." description="A libre frontend for JioSaavn." />

<main class="flex flex-ac flex-dirc">
  <div class="container flex flex-jc flex-dirc">
    <Header />

    {#if $page.url.pathname.includes("search")}
      <BelowHeader />
    {/if}
  </div>

  {#key data}
    <div class="inner_container" in:fade={{ delay: 500 }} out:fade>
      {#if $navigating}
        <Spinner />
      {:else}
        <slot />
      {/if}
    </div>
  {/key}

  {#if Object.keys($active).length !== 0}
    <Player />
  {/if}
</main>

{#if $BiggerPlayerVisible}
  <BiggerPlayer/>
{/if}

<style>
  div.inner_container {
    height: 100%;
    max-height: 100%;
    overflow: auto;
  }
</style>
