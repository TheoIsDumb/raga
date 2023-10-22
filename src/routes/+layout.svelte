<script>
  import Header from "$lib/components/Header.svelte"
  import Player from "$lib/components/Player.svelte"
  import Spinner from "$lib/icons/Spinner.svelte"
  import BelowHeader from "$lib/components/BelowHeader.svelte"
  import BiggerPlayer from "$lib/components/BiggerPlayer.svelte"
  import Sidebar from "$lib/components/Sidebar.svelte"
  import "$lib/styles/app.css"
  import "$lib/styles/tailwind.css"

  import { active, BiggerPlayerVisible } from "$lib/store"
  import { navigating } from "$app/stores"
  import { page } from "$app/stores"
  import { fade } from 'svelte/transition'

  import '@vetixy/circular-std'

  export let data
</script>

<svelte:head>
  <title>{Object.keys($active).length !== 0 ? document.createRange().createContextualFragment($active.title).textContent + ' | raga.' : 'raga.'}</title>
  <meta name="description" content="A libre frontend for JioSaavn.">
  <link rel="icon" href="https://raga.vkdbois.xyz/img/favicon.png">

  <meta property="og:title" content="Raga.">
  <meta property="og:url" content="https://raga.vkdbois.xyz">
  <meta property="og:description" content="A libre frontend for JioSaavn.">
  <meta property="og:image" content="https://raga.vkdbois.xyz/img/og.jpg">
  <meta property="og:image:alt" content="Raga - A libre music frontend.">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Raga.">
  <meta name="twitter:description" content="A libre frontend for JioSaavn.">
  <meta name="twitter:image" content="https://raga.vkdbois.xyz/img/og.jpg"> 
</svelte:head>

<main class="overflow-auto w-[100dvw] h-[100dvh]">
  <div class="w-full xl:w-[calc(100dvw-20.5rem)] xl:ml-[20rem] px-2 xl:px-4"
  class:mb-20={Object.keys($active).length !== 0}>
    <div class="flex justify-center flex-col">
      <Header />

      {#if $page.url.pathname.includes("search")}
        <BelowHeader />
      {/if}
    </div>

    {#key data}
      {#if $navigating}
        <Spinner />
      {:else}
        <div in:fade={{ delay: 300 }} out:fade>
            <slot />
        </div>
      {/if}
    {/key}
  </div>
</main>

{#if Object.keys($active).length !== 0}
  <Player />
{/if}

<Sidebar />

{#if $BiggerPlayerVisible}
  <BiggerPlayer/>
{/if}