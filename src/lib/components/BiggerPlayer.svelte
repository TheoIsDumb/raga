<script>
  import { fade } from "svelte/transition";
  import { BiggerPlayerVisible } from "$lib/store.js";
  import { active, paused } from "$lib/store";

  import Seekbar from "./Seekbar.svelte";
  import Play from "$lib/icons/Play.svelte";
  import Pause from "$lib/icons/Pause.svelte";
  import Prev from "$lib/icons/Prev.svelte";
  import Next from "$lib/icons/Next.svelte";
  import Spinner from "$lib/icons/Spinner.svelte";

  async function showLyrics() {
    if ($active.more_info.has_lyrics === "false") {
      return "No lyrics found.";
    } else {
      const res = await fetch(`/api/lyrics?songid=${$active.id}`);
      const data = await res.json();

      if (res.ok) {
        return data.lyrics;
      } else {
        throw new Error(data);
      }
    }
  }

  function close(e) {
    if (e.key === "Escape") {
      $BiggerPlayerVisible = false;
    }
  }
</script>

<div class="biggerplayer flex flex-ac flex-jc flex-dirc" transition:fade>
  <div class="player_container flex">
    <div class="player flex flex-jc flex-ac flex-dirc">
      <img
        src={$active.image.replace("150x150", "500x500")}
        alt={$active.title}
        loading="lazy"
      />

      <div class="info_container">
        <div class="title">{@html $active.title}</div>
        <div class="subtitle">{@html $active.subtitle.split("-")[0]}</div>
        <div class="album">{@html $active.more_info.album}</div>
      </div>

      <div class="seekbar_container">
        <Seekbar />
      </div>

      <div class="buttons">
        <Prev />

        {#if $paused}
          <Play />
        {:else}
          <Pause />
        {/if}

        <Next />
      </div>
    </div>

    <div class="lyrics">
      {#key $active.id}
        {#await showLyrics()}
          <Spinner />
        {:then lyrics}
          <p>{@html lyrics}</p>
        {:catch error}
          <p>No lyrics found.</p>
        {/await}
      {/key}
    </div>
  </div>

  <button
    class="glow"
    on:click={() => ($BiggerPlayerVisible = !$BiggerPlayerVisible)}
  >
    ✕
  </button>
</div>

<svelte:window on:keydown={close} />

<style>
  div.lyrics {
    overflow: auto;
    scrollbar-width: thin;
    margin: 2rem 0;
    font-weight: bold;
  }
  div.biggerplayer {
    position: fixed;
    top: 0;
    left: 0;
    height: 100dvh;
    width: 100dvw;
    gap: 1rem;
    background-color: #00000073;
    backdrop-filter: blur(13.6px);
    -webkit-backdrop-filter: blur(13.6px);
  }
  div.player_container {
    height: 100dvh;
    width: 96%;
    max-width: 1800px;
  }
  div.player {
    width: 50%;
    gap: 0.5rem;
  }
  div.lyrics {
    width: 50%;
  }
  div.title {
    margin-top: 0.5rem;
    font-weight: bold;
  }
  div.subtitle,
  div.album {
    font-size: 0.8rem;
  }
  @media (max-width: 768px) {
    img {
      width: 50%;
    }
  }
  @media (min-width: 768px) {
    img {
      width: 50%;
    }
  }
  button {
    all: unset;
    position: fixed;
    top: 2rem;
    left: 2rem;
    cursor: pointer;
    font-size: 1.5rem;
  }
  .seekbar_container {
    width: 80%;
  }
  div.info_container {
    text-align: center;
  }
</style>
