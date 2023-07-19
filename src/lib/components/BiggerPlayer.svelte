<script>
  import { fade } from 'svelte/transition'
  import { BiggerPlayerVisible } from '$lib/store.js'
  import { active, paused } from '$lib/store'

  import Seekbar from './Seekbar.svelte';
  import Play from '$lib/icons/Play.svelte';
  import Pause from '$lib/icons/Pause.svelte';
  import Prev from '$lib/icons/Prev.svelte';
  import Next from '$lib/icons/Next.svelte';
</script>

<div class="biggerplayer flex flex-ac flex-jc flex-dirc" transition:fade>
  <img src={$active.image.replace('150x150', '500x500')} alt={$active.title} loading="lazy"/>

  <div class="info_container">
    <div class="title">{@html $active.title}</div>
    <div class="subtitle">{@html $active.subtitle.split('-')[0]}</div>
    <div class="album">{@html $active.more_info.album}</div>
  </div>

  <div class="seekbar_container">
    <Seekbar/>
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

  <button class="glow" on:click={() => $BiggerPlayerVisible = !$BiggerPlayerVisible}>▽</button>
</div>

<style>
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
  div.title {
    margin-top: 0.5rem;
    font-weight: bold;
  }
  div.subtitle, div.album {
    font-size: 0.8rem;
  }
  @media (max-width: 768px) {
      img {
          width: 50%;
      }
  }
  @media (min-width: 768px) {
      img {
          height: 50%;
      }
  }
  button {
    all: unset;
    position: fixed;
    bottom: 1rem;
    cursor: pointer;
    font-size: 1.5rem;
  }
  .seekbar_container {
    width: 50%;
  }
  div.info_container {
    text-align: center;
  }
</style>