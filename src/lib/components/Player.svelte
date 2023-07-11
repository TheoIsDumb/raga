<script>
  import { fly } from "svelte/transition";
  import Pause from "$lib/icons/Pause.svelte";
  import Play from "$lib/icons/Play.svelte";
  import Seekbar from "./Seekbar.svelte";
  import { active } from "$lib/store";

  let paused = true;
  let currentTime = 0;
  let duration = 0;
</script>

<div class="player flex flex-dirc" transition:fly={{ y: 50, duration: 800 }}>
  <Seekbar bind:currentTime bind:duration />

  <div class="buttonimginfo flex flex-ac">
    <div class="imginfo flex flex-ac">
      <img loading="lazy" src={$active.image} alt={$active.name} />
      <div class="info">
        <div id="title">{@html $active.name}</div>
        <div id="subtitle">{@html $active.artist}</div>
      </div>
    </div>

    <audio
      src={$active.url}
      bind:currentTime
      bind:paused
      bind:duration
      autoplay
    />

    {#if paused}
      <Play bind:paused />
    {:else}
      <Pause bind:paused />
    {/if}
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
    position: fixed;
    bottom: 0.5rem;
    left: 50%;
    transform: translate(-50%);
    width: 96%;
    max-width: 900px;
    background-color: var(--base-dark);
    padding: 0.5rem;
    border: 1px solid var(--fg);
    border-radius: 0.4rem;
    justify-content: space-between;
    gap: 0.5rem;
    box-shadow: 0 0 0.7rem var(--fg);
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
