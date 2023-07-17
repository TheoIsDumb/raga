<script>
  import { fly } from "svelte/transition";
  import { decrypt } from "$lib/utils";
  import { active, currentPlaylist, index } from "$lib/store";

  import Pause from "$lib/icons/Pause.svelte";
  import Play from "$lib/icons/Play.svelte";
  import Prev from "$lib/icons/Prev.svelte";
  import Next from "$lib/icons/Next.svelte";
  import Seekbar from "./Seekbar.svelte";

  let paused = true;
  let currentTime = 0;
  let duration = 0;

  $: $active = $currentPlaylist[$index];
</script>

<div class="player flex flex-dirc" in:fly={{ y: 50, duration: 800 }}>
  <Seekbar bind:currentTime bind:duration />

  <div class="imginfo flex flex-ac">
    <img loading="lazy" src={$active.image} alt={$active.title} />
    <div class="title">
      <span>
        <strong>{$active.title}</strong> - {$active.subtitle}
      </span>
    </div>

    <div class="buttons flex">
      <Prev />

      {#if paused}
        <Play bind:paused />
      {:else}
        <Pause bind:paused />
      {/if}

      <Next />
    </div>

    <audio
      src={decrypt(
        $active.more_info.encrypted_media_url,
        $active.more_info["320kbps"]
      )}
      bind:currentTime
      bind:paused
      bind:duration
      autoplay
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

<style>
  .imginfo {
    gap: 1rem;
    max-width: 100%;
  }
  div.player {
    background-color: var(--base-dark);
    padding: 0.2rem;
    justify-content: space-between;
    gap: 0.5rem;
  }
  div.title {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
  }
  img {
    height: 2rem;
  }
  :global(.player svg) {
    cursor: pointer;
  }
</style>
