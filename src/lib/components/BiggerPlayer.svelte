<script>
  import { fade } from 'svelte/transition'
  import { BiggerPlayerVisible } from '$lib/store.js'
  import { active } from '$lib/store'
</script>

<div class="biggerplayer flex flex-ac flex-jc flex-dirc" transition:fade>
  <img src={$active.image.replace('150x150', '500x500')} alt={$active.title} loading="lazy"/>

  <div class="title">{$active.title}</div>
  <div class="subtitle">{$active.subtitle}</div>

  <button class="glow"
  on:click={() => $BiggerPlayerVisible = !$BiggerPlayerVisible}
  >▽</button>
</div>

<style>
  div.biggerplayer {
    position: fixed;
    top: 0;
    left: 0;
    height: 100dvh;
    width: 100dvw;
    background: #000000cd;
  }
  div.title {
    margin-top: 0.5rem;
    font-weight: bold;
  }
  div.subtitle {
    font-size: 0.8rem;
  }
  @media (max-width: 768px) {
      img {
          width: 85%;
      }
  }
  @media (min-width: 768px) {
      img {
          height: 60%;
      }
  }
  button {
    all: unset;
    position: fixed;
    bottom: 1rem;
    cursor: pointer;
    font-size: 1.5rem;
  }
</style>