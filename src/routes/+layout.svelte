<script>
  import Header from "$lib/components/Header.svelte";
  import Player from "$lib/components/Player.svelte";
  import Spinner from "$lib/icons/Spinner.svelte";
  import BelowHeader from "$lib/components/BelowHeader.svelte";
  import BiggerPlayer from "$lib/components/BiggerPlayer.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import "$lib/styles/app.css";
  import "$lib/styles/tailwind.css";

  import { active, BiggerPlayerVisible } from "$lib/store";
  import { navigating } from "$app/stores";
  import { page } from "$app/stores";
  import { fade } from 'svelte/transition'

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
  {#key data}
    <div
      class="inner_container w-full h-full overflow-auto flex"
      class:mb-20={Object.keys($active).length !== 0}>
      <Sidebar />
        <div class="w-full xl:w-[calc(100dvw-20rem)] xl:ml-[20rem] px-2 xl:px-4">
          <div class="w-full flex justify-center flex-col">
            <Header />

            {#if $page.url.pathname.includes("search")}
              <BelowHeader />
            {/if}
          </div>

          {#if $navigating}
            <Spinner />
          {:else}
            <div in:fade={{ delay: 300 }} out:fade>
                <slot />
            </div>
          {/if}
        </div>
    </div>
  {/key}

  {#if Object.keys($active).length !== 0}
    <Player />
  {/if}
</main>

{#if $BiggerPlayerVisible}
  <BiggerPlayer/>
{/if}