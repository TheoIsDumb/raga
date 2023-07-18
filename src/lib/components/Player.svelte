<script>
  import { fly } from "svelte/transition";
  import { decrypt } from "$lib/utils";
  import { active, currentPlaylist, index, BiggerPlayerVisible } from "$lib/store";

  import Pause from "$lib/icons/Pause.svelte";
  import Play from "$lib/icons/Play.svelte";
  import Seekbar from "./Seekbar.svelte";

  let paused = true;
  let currentTime = 0;
  let duration = 0;

  $: $active = $currentPlaylist[$index];

  function playhandle() {
		if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: $active.title,
        artist: $active.subtitle.split('-')[0],
        album: $active.more_info.album,
        artwork: [
          { src: $active.image.replace('150x150', '500x500'), sizes: '500x500', type: 'image/jpeg' }
        ]
      });
    }
	}
</script>

<div class="player flex flex-dirc" in:fly={{ y: 50, duration: 800 }}>
  <Seekbar bind:currentTime bind:duration />

  <div class="imginfo flex flex-ac">
    <img loading="lazy" src={$active.image} alt={$active.title} />

    <div class="title flex flex-ac"
    on:click={() => $BiggerPlayerVisible = !$BiggerPlayerVisible}
    on:keypress={() => $BiggerPlayerVisible = !$BiggerPlayerVisible}
    >
      <span>
        <strong>{@html $active.title}</strong> - {@html $active.subtitle.split('-')[0]}
      </span>
    </div>

    <div class="buttons">
      {#if paused}
        <Play bind:paused />
      {:else}
        <Pause bind:paused />
      {/if}
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

<style>
  .imginfo {
    gap: 1rem;
    max-width: 100%;
  }
  div.player {
    background-color: var(--base-dark);
    padding: 0.2rem;
    justify-content: space-between;
    gap: 0.3rem;
    width: 100%;
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
</style>
