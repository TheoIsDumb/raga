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

  import "@vetixy/circular-std"
  import { MetaTags } from "svelte-meta-tags"

  export let data
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
        url: 'https://raga.vkdbois.xyz/img/og.jpg',
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
    image: 'https://raga.vkdbois.xyz/img/og.jpg',
  }}
  additionalLinkTags={[
    {
      rel: 'icon',
      href: '/img/favicon.png'
    }
  ]}  
/>

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