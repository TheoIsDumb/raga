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

<div class="player flex flex-col p-1 cursor-pointer gap-3 rounded fixed bottom-3 w-[96%] backdrop-blur"
  in:fly={{ y: 50, duration: 800 }}>
  <div class="base w-full rounded h-1">
    <div class="bar h-1 rounded" style="--progress: {$currentTime / $duration}%" />
  </div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="imginfo flex items-center justify-between"
      on:click|self={() => $BiggerPlayerVisible = !$BiggerPlayerVisible}
  >
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="imgparent flex gap-2 w-4/6 lg:w-auto">
      <img class="image h-12 rounded" src={$active.image} alt={$active.title}/>
      <div class="title flex flex-col justify-center text-sm truncate w-full" on:click={() => $BiggerPlayerVisible = !$BiggerPlayerVisible}>
          <span class="font-bold text-base truncate">{@html $active.title}</span>
          <span class="truncate">{@html $active.subtitle.split("-")[0]}</span>
      </div>
    </div>

    <div class="buttons flex gap-3 mb-3 mr-3">
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
    background: rgba(0, 0, 0, 0.471);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.472);
  }
  .bar {
    width: calc(100 * var(--progress));
    background-color: var(--fg);
  }
</style>