<script>
  import Header from "$lib/components/Header.svelte";
  import Player from "$lib/components/Player.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Spinner from "$lib/icons/Spinner.svelte";
  import BelowHeader from "$lib/components/BelowHeader.svelte";
  import "$lib/styles/app.css";

  import { active } from "$lib/store";
  import { navigating } from "$app/stores";
  import { fade } from "svelte/transition";
  import { page } from "$app/stores";

  import "@fontsource/inter-tight";
  import "@fontsource/inter-tight/400.css";
  import { MetaTags } from "svelte-meta-tags";

  export let data;
</script>

<MetaTags title="paattu." description="A libre frontend for JioSaavn." />

<main class="flex flex-dirc">
  <Header />

  {#if $page.url.pathname.includes("search")}
    <BelowHeader />
  {/if}

  {#key data}
    <div class="inner_container" in:fade={{ delay: 500 }} out:fade>
      {#if $navigating}
        <Spinner />
      {:else}
        <slot />
      {/if}
    </div>
  {/key}

  {#if !$navigating}
    <Footer />
  {/if}

  {#if Object.keys($active).length !== 0}
    <Player />
  {/if}
</main>

<style>
  div.inner_container {
    height: 85%;
    max-height: 85%;
    overflow: auto;
  }
</style>
