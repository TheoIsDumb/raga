<script>
  import { fly } from "svelte/transition";
  import { decrypt } from "$lib/utils";
  import { active, currentPlaylist, index, BiggerPlayerVisible, currentTime, duration, paused, repeat, audioElement } from "$lib/store";
  import { back, next, playToggle } from '$lib/utils'

  import Pause from "$lib/icons/Pause.svelte"
  import Play from "$lib/icons/Play.svelte"
  import Prev from "$lib/icons/Prev.svelte"
  import Next from "$lib/icons/Next.svelte"

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

      navigator.mediaSession.setActionHandler('previoustrack', back);
      navigator.mediaSession.setActionHandler('nexttrack', next);
    }
  }

  function pause(e) {
    if (e.code === "Space" && e.target.tagName !== "INPUT") {
      $paused = !$paused;
    }
  }
</script>

<div class="player flex flex-dirc" in:fly={{ y: 50, duration: 800 }}>
  <div class="base">
    <div class="bar" style="--progress: {$currentTime / $duration}%" />
  </div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="imginfo flex flex-ac"
      on:click|self={() => $BiggerPlayerVisible = !$BiggerPlayerVisible}
  >
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="imgparent flex" style="gap: 0.5rem;">
      <img class="image" src={$active.image} alt={$active.title}/>
      <div class="title flex flex-jc flex-dirc" on:click={() => $BiggerPlayerVisible = !$BiggerPlayerVisible}>
          <span style="font-size: 1rem; font-weight: bold;">{@html $active.title}</span>
          <span>{@html $active.subtitle.split("-")[0]}</span>
      </div>
    </div>

    <div class="buttons flex flex-ac">
      <button class="empty" on:click={back}><Prev/></button>

      {#if $paused}
        <button class="empty" on:click={playToggle}><Play/></button>
      {:else}
        <button class="empty" on:click={playToggle}><Pause/></button>
      {/if}

      <button class="empty" on:click={next}><Next/></button>
    </div>

    <audio
      src={decrypt(
        $active.more_info.encrypted_media_url,
        $active.more_info["320kbps"]
      )}
      bind:this={$audioElement}
      bind:currentTime={$currentTime}
      bind:paused={$paused}
      bind:duration={$duration}
      autoplay
      on:play={playhandle}
      on:ended={() => {
        if ($repeat === true) {
          $currentTime = 0;
          $paused = !$paused;
        } else {
          if ($index === $currentPlaylist.length - 1) {
            $index = 0;
          } else {
            $index++;
          }
        }
      }}
    />
  </div>
</div>

<svelte:window on:keydown={pause} />

<style>
  div.player {
    background: rgba(0, 0, 0, 0.589);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.5px);
    -webkit-backdrop-filter: blur(7.5px);
    border: 1px solid rgba(255, 255, 255, 0.472);
    padding: 0.3rem;
    cursor: pointer;
    gap: 0.8rem;
    border-radius: 0.3rem;
    position: fixed;
    bottom: 0.3rem;
    width: 96%;
  }
  .imginfo {
    justify-content: space-between;
  }
  .title {
    font-size: 0.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  :global(.player svg) {
    cursor: pointer;
  }
  .base {
    width: 100%;
    border-radius: 0.3rem;
  }
  .bar {
    width: calc(100 * var(--progress));
    height: 0.2rem;
    background-color: var(--fg);
    border-radius: inherit;
  }
  .image {
    height: 3rem;
    border-radius: 0.3rem;
  }
  .buttons {
    gap: 0.8rem;
    margin-bottom: 0.3rem;
    margin-right: 0.4rem;
  }
  :global(.player .buttons svg) {
    height: 1.2rem;
    width: 1.2rem;
  }
  @media (max-width: 768px) {
    .player {
      width: 96%;
    }
    .imgparent {
      width: 50%;
    }
  }
  .title span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>