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

  import "@vetixy/circular-std"
  import { MetaTags } from "svelte-meta-tags";

  export let data;
</script>

<MetaTags
  title={Object.keys($active).length !== 0 ? $active.title : ''}
  titleTemplate={Object.keys($active).length !== 0 ? '%s | paattu.' : 'paattu.'}
  description="A libre frontend for JioSaavn."
  openGraph={{
    url: 'https://paattu.vkdbois.xyz',
    title: 'Paattu',
    description: 'A libre frontend for JioSaavn.',
    images: [
      {
        url: 'https://paattu.vkdbois.xyz/img/og.png',
        width: 1200,
        height: 630,
        alt: "Paattu - A libre music frontend."
      },
    ],
  }}
  twitter={{
    cardType: 'summary_large_image',
    title: "paattu.",
    description: 'A libre frontend for JioSaavn.',
    image: 'https://paattu.vkdbois.xyz/img/og.png',
  }}
  additionalLinkTags={[
    {
      rel: 'icon',
      href: '/img/favicon.png'
    }
  ]}  
  />

<main class="flex flex-ac flex-dirc">
  <div class="container flex flex-jc flex-dirc">
    <Header />

    {#if $page.url.pathname.includes("search")}
      <BelowHeader />
    {/if}
  </div>

  {#key data}
    <div
      class="inner_container"
      class:padding-bottom={Object.keys($active).length !== 0}
      in:fade={{ delay: 500 }} out:fade>
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
    overflow: auto;
  }
  .padding-bottom {
    padding-bottom: 5rem;
  }
</style>
