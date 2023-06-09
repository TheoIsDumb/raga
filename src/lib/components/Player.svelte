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

<div class="player flex" transition:fly={{ y: 50, duration: 800 }}>
  <div class="buttonimginfo flex flex-ac">
    {#if paused}
      <Pause bind:paused />
    {:else}
      <Play bind:paused />
    {/if}

    <img src={$active.image} alt={$active.name} />
    <audio
      src={$active.url}
      bind:currentTime
      bind:paused
      bind:duration
      autoplay
    />

    <div class="info">
      <div id="title">{$active.name}</div>
      <div id="subtitle">{$active.artist}</div>
    </div>
  </div>

  <Seekbar bind:currentTime bind:duration />
</div>

<style>
  .buttonimginfo {
    gap: 0.5rem;
  }
  div.player {
    position: fixed;
    height: 3rem;
    bottom: 0.5rem;
    left: 50%;
    transform: translate(-50%);
    width: 80%;
    max-width: 900px;
    background-color: rgb(42, 41, 41);
    padding: 0.5rem;
    border: 1px solid gray;
    border-radius: 0.4rem;
    justify-content: space-between;
  }
  div#title {
    font-weight: bold;
    font-size: 0.8rem;
  }
  div#subtitle {
    font-size: 0.5rem;
  }
  img {
    height: 2rem;
  }
  :global(.player svg) {
    cursor: pointer;
  }
</style>
