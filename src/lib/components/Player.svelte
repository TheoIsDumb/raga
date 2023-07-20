<script>
  import { fly } from "svelte/transition";
  import { decrypt } from "$lib/utils";
  import {
    active,
    currentPlaylist,
    index,
    BiggerPlayerVisible,
    currentTime,
    duration,
    paused,
  } from "$lib/store";

  import Pause from "$lib/icons/Pause.svelte";
  import Play from "$lib/icons/Play.svelte";

  $: $active = $currentPlaylist[$index];

  function playhandle() {
    if ("mediaSession" in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: $active.title,
        artist: $active.subtitle.split("-")[0],
        album: $active.more_info.album,
        artwork: [
          { src: $active.image, sizes: "150x150", type: "image/jpeg" },
          {
            src: $active.image.replace("150x150", "500x500"),
            sizes: "500x500",
            type: "image/jpeg",
          },
        ],
      });
    }
  }

  function pause(e) {
    if (e.code === "Space" && e.target.tagName !== "INPUT") {
      $paused = !$paused;
    }
  }
</script>

<div class="player container flex flex-dirc" in:fly={{ y: 50, duration: 800 }}>
  <div class="base">
    <div class="bar" style="--progress: {$currentTime / $duration}%" />
  </div>

  <div class="imginfo flex flex-ac">
    <img loading="lazy" src={$active.image} alt={$active.title} />

    <div
      class="title flex flex-ac"
      on:click={() => ($BiggerPlayerVisible = !$BiggerPlayerVisible)}
      on:keypress={() => ($BiggerPlayerVisible = !$BiggerPlayerVisible)}
    >
      <span>
        <strong>{@html $active.title}</strong> - {@html $active.subtitle.split(
          "-"
        )[0]}
      </span>
    </div>

    <div class="buttons">
      {#if $paused}
        <Play />
      {:else}
        <Pause />
      {/if}
    </div>

    <audio
      src={decrypt(
        $active.more_info.encrypted_media_url,
        $active.more_info["320kbps"]
      )}
      bind:currentTime={$currentTime}
      bind:paused={$paused}
      bind:duration={$duration}
      autoplay
      on:play={playhandle}
      on:ended={() => {
        if ($index === $currentPlaylist.length - 1) {
          $index = 0;
        } else {
          $index++;
        }
      }}
    />
  </div>
</div>

<svelte:window on:keydown={pause} />

<style>
  .imginfo {
    padding: 0.2rem;
    gap: 1rem;
    max-width: 100%;
  }
  div.player {
    background-color: var(--base-dark);
    background: linear-gradient(to bottom, #434343, #000000);
    justify-content: space-between;
    gap: 0.3rem;
    border-radius: 0.3rem 0.3rem 0 0;
    padding: 0 !important;
    cursor: pointer;
  }
  div.title {
    width: 100%;
    height: 100%;
    overflow: hidden;
    white-space: nowrap;
    font-size: 0.8rem;
  }
  img {
    height: 2rem;
  }
  :global(.player svg) {
    cursor: pointer;
  }
  .base {
    width: 100%;
    border-radius: inherit;
  }
  .bar {
    width: calc(100 * var(--progress));
    height: 0.2rem;
    background-color: var(--fg);
    border-radius: inherit;
  }
</style>
