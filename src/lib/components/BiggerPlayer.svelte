<script>
  import { fade } from "svelte/transition";
  import { BiggerPlayerVisible, active, paused, repeat } from "$lib/store";
  import { playToggle, repeatToggle, back, next } from '$lib/utils'

  import Seekbar2 from "./Seekbar2.svelte";
  import Play from "$lib/icons/Play.svelte";
  import Pause from "$lib/icons/Pause.svelte";
  import Prev from "$lib/icons/Prev.svelte";
  import Next from "$lib/icons/Next.svelte";
  import Lyrics from "./Lyrics.svelte";
  import CurrentPlaylist from "./CurrentPlaylist.svelte";
  import Repeat from '$lib/icons/Repeat.svelte'
  import Shuffle from '$lib/icons/Shuffle.svelte'
  import Volume from '$lib/components/Volume.svelte'

  function close(e) {
    if (e.key === "Escape") {
      $BiggerPlayerVisible = false;
    }
  }

  let shown = CurrentPlaylist;
</script>

<div class="biggerplayer flex items-center justify-center flex-col fixed top-0 left-0 gap-4 backdrop-blur-md h-[100dvh] w-[100dvw]"
  transition:fade>
  <div class="player_container h-[100dvh] w-11/12 max-w-[1800px] flex py-6 gap-4 flex-col xl:flex-row xl:gap-0">
    <div class="player flex items-center justify-center flex-col gap-4 h-2/5 xl:h-auto xl:w-1/2">
      <img class="rounded h-1/2 xl:h-auto xl:w-1/2"
        src={$active.image.replace("150x150", "500x500").replace('c.saavncdn.com', 'proxy.raga.vkdbois.xyz/media')}
        alt={$active.title}
        loading="lazy"
      />

      <div class="info_container text-center w-full">
        <div class="font-bold">{@html $active.title}</div>
        <div class="text-sm">{@html $active.subtitle.split("-")[0]}</div>
        <div class="text-sm">{@html $active.more_info.album}</div>
      </div>

      <div class="seekbar_container w-full xl:w-4/5">
        <Seekbar2 />
      </div>

      <div class="buttons flex items-center w-full xl:w-4/5 justify-between">
        <button class="empty" on:click={repeatToggle} style="filter: {$repeat === false ? 'brightness(50%)' : ''}"><Repeat/></button>

        <button class="empty" on:click={back}><Prev/></button>

        {#if $paused}
          <button class="empty" on:click={playToggle}><Play/></button>
        {:else}
          <button class="empty" on:click={playToggle}><Pause/></button>
        {/if}

        <button class="empty" on:click={next}><Next/></button>

        <Shuffle />
        <Volume />
      </div>
    </div>

    <div class="lyrics_playlist flex flex-col gap-2 w-full xl:w-1/2 h-3/5 xl:h-full">
      <div class="lyrplaybtns flex justify-between">
        <button
          class="cursor-pointer border-0 bg-transparent font-bold transition duration-300"
          class:colorful={shown === Lyrics}
          on:click={() => (shown = Lyrics)}>Lyrics</button
        >

        <button
          on:click={() => (shown = CurrentPlaylist)}
          class:colorful={shown === CurrentPlaylist}>Now Playing</button
        >
      </div>

      {#key shown}
        <svelte:component this={shown} />
      {/key}
    </div>
  </div>

  <button class="fixed top-6 left-6 cursor-pointer text-2xl glow" on:click={() => ($BiggerPlayerVisible = !$BiggerPlayerVisible)}>✕</button>
</div>

<svelte:window on:keydown={close} />

<style>
  div.biggerplayer { background-color: #0000008e; }
  .colorful {
    background-image: linear-gradient(to right, #5d26c1, #a17fe0, #59c173);
    background-clip: text;
    color: transparent !important;
    font-weight: bold;
  }
</style>