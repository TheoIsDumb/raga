<script>
  import Header from "$lib/components/Header.svelte";
  import Player from "$lib/components/Player.svelte";
  import Spinner from "$lib/icons/Spinner.svelte";
  import BelowHeader from "$lib/components/BelowHeader.svelte";
  import BiggerPlayer from "$lib/components/BiggerPlayer.svelte";
  import "$lib/styles/app.css";
  import "$lib/styles/tailwind.css";

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
  titleTemplate={Object.keys($active).length !== 0 ? '%s | raga.' : 'raga.'}
  description="A libre frontend for JioSaavn."
  openGraph={{
    url: 'https://raga.vkdbois.xyz',
    title: 'Raga',
    description: 'A libre frontend for JioSaavn.',
    images: [
      {
        url: 'https://raga.vkdbois.xyz/img/og.png',
        width: 1200,
        height: 630,
        alt: "Raga - A libre music frontend."
      },
    ],
  }}
  twitter={{
    cardType: 'summary_large_image',
    title: "Raga.",
    description: 'A libre frontend for JioSaavn.',
    image: 'https://raga.vkdbois.xyz/img/og.png',
  }}
  additionalLinkTags={[
    {
      rel: 'icon',
      href: '/img/favicon.png'
    }
  ]}  
  />

<main class="flex items-center flex-col gap-2 overflow-hidden mx-0 my-auto w-[100dvw] max-w-[100dvw] h-[100dvh]">
  <div class="container flex justify-center flex-col">
    <Header />

    {#if $page.url.pathname.includes("search")}
      <BelowHeader />
    {/if}
  </div>

  {#key data}
    <div
      class="inner_container w-full h-full overflow-auto px-2 lg:px-4"
      class:pb-20={Object.keys($active).length !== 0}
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