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
</script>

<div class="player flex flex-dirc" in:fly={{ y: 50, duration: 800 }}>
  <Seekbar bind:currentTime bind:duration />

  <div class="buttonimginfo flex flex-ac">
    <div class="imginfo flex flex-ac">
      <img loading="lazy" src={$active.image} alt={$active.title} />
      <div class="info">
        <div id="title">{@html $active.title}</div>
        <div id="subtitle">{@html $active.subtitle}</div>
      </div>
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
        $index++;
        $active = $currentPlaylist[$index];
      }}
    />

    <div class="buttons">
      <Prev />

      {#if paused}
        <Play bind:paused />
      {:else}
        <Pause bind:paused />
      {/if}

      <Next />
    </div>
  </div>
</div>

<style>
  .buttonimginfo {
    justify-content: space-between;
  }
  .imginfo {
    gap: 1rem;
  }
  div.player {
    background-color: var(--base-dark);
    padding: 0.2rem;
    justify-content: space-between;
    gap: 0.5rem;
  }
  div#title {
    font-weight: bold;
    font-size: 0.8rem;
  }
  div#subtitle {
    font-size: 0.6rem;
  }
  img {
    height: 2rem;
  }
  :global(.player svg) {
    cursor: pointer;
  }
</style>
