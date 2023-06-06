<script>
  import { fly } from "svelte/transition";
  export let name;
  export let artist;
  export let cover;
  export let url;

  let paused = true;
  let currentTime = 0;
  let duration = 0;

  function format(time) {
    if (isNaN(time)) return "...";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }
</script>

<div class="player flex flex-ac" transition:fly={{ y: 50 }}>
  <button
    on:click={() => {
      paused = !paused;
    }}
  >
    {#if paused}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        ><path
          fill="currentColor"
          d="M7.608 4.615a.75.75 0 0 0-1.108.659v13.452a.75.75 0 0 0 1.108.659l12.362-6.726a.75.75 0 0 0 0-1.318L7.608 4.615ZM5 5.274c0-1.707 1.826-2.792 3.325-1.977l12.362 6.726c1.566.853 1.566 3.101 0 3.953L8.325 20.702C6.826 21.518 5 20.432 5 18.726V5.274Z"
        /></svg
      >
    {:else}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        ><path
          fill="currentColor"
          d="M6.25 3A2.25 2.25 0 0 0 4 5.25v13.5A2.25 2.25 0 0 0 6.25 21h2.5A2.25 2.25 0 0 0 11 18.75V5.25A2.25 2.25 0 0 0 8.75 3h-2.5ZM5.5 5.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.75-.75V5.25ZM15.25 3A2.25 2.25 0 0 0 13 5.25v13.5A2.25 2.25 0 0 0 15.25 21h2.5A2.25 2.25 0 0 0 20 18.75V5.25A2.25 2.25 0 0 0 17.75 3h-2.5Zm-.75 2.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.75-.75V5.25Z"
        /></svg
      >
    {/if}
  </button>

  <img src={cover} alt={name} />
  <audio src={url} bind:currentTime bind:paused bind:duration autoplay />

  <div class="info">
    <div id="title">{name}</div>
    <div id="subtitle">{artist}</div>
  </div>

  <div class="progresstime flex flex-ac">
    <span>{format(currentTime)}</span>

    <div class="progress flex flex-ac">
      <div class="progessbar" style="--progress: {currentTime / duration}%" />
    </div>

    <span>{format(duration)}</span>
  </div>
</div>

<style>
  .progress {
    width: 20rem;
    background-color: gainsboro;
    border-radius: 0.3rem;
    height: 0.3rem;
  }
  .progessbar {
    width: calc(100 * var(--progress));
    height: inherit;
    border-radius: inherit;
    background-color: dodgerblue;
  }
  div.player {
    position: fixed;
    height: 3rem;
    bottom: 0.5rem;
    left: 50%;
    transform: translate(-50%);
    width: 96%;
    max-width: 900px;
    background-color: rgb(42, 41, 41);
    gap: 1rem;
    padding: 0.5rem;
    border: 1px solid gray;
    border-radius: 0.4rem;
    justify-content: stretch;
  }
  div#title {
    font-weight: bold;
    font-size: 0.8rem;
  }
  div#subtitle {
    font-size: 0.5rem;
  }
  div.progresstime {
    gap: 1rem;
  }
  button {
    all: unset;
    cursor: pointer;
    height: 1rem;
    width: 1rem;
  }
  img {
    height: 2rem;
  }
</style>
