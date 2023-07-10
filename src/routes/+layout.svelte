<script>
  import Header from "$lib/components/Header.svelte";
  import Player from "$lib/components/Player.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Spinner from "$lib/icons/Spinner.svelte";
  import BelowHeader from "$lib/components/BelowHeader.svelte";
  import "$lib/styles/app.css";

  import { active } from "$lib/store";
  import { navigating } from "$app/stores";
  import { fly } from "svelte/transition";
  import { page } from "$app/stores";

  import "@fontsource/inter-tight";
  import "@fontsource/inter-tight/400.css";
  import { MetaTags } from "svelte-meta-tags";

  export let data;
</script>

<MetaTags title="paattu." description="A libre frontend for JioSaavn." />

<main
  class:bottom-gap={Object.keys($active).length !== 0}
  class="flex flex-dirc"
>
  <Header />
  {#if $page.url.pathname.includes("search")}
    <BelowHeader />
  {/if}
  {#key data}
    <div in:fly={{ y: 50, duration: 500 }} out:fly={{ y: -50 }}>
      {#if $navigating}
        <Spinner />
      {:else}
        <slot />
      {/if}
    </div>
  {/key}
  <Footer />
</main>

{#if Object.keys($active).length !== 0}
  <Player />
{/if}

<style>
  .bottom-gap {
    margin-bottom: 6rem;
  }

  main {
    justify-content: space-between;
    margin-top: 2rem;
  }
</style>
