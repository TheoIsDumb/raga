<script>
  import { currentTime, duration } from "$lib/store";
  import '$lib/styles/range.css'

	$: percentage = ($currentTime/$duration) * 100;

  function format(time) {
    if (isNaN(time)) return "...";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }
</script>

<div class="progress flex flex-ac flex-dirc">
  <input type="range" max={$duration} bind:value={$currentTime} style="--value: {percentage.toString() + "%"}">
  <div class="time flex">
    <span>{format($currentTime)}</span>
    <span>{format($duration)}</span>
  </div>
</div>

<style>
  .progress {
    gap: 0.5rem;
    user-select: none;
  }
  .progress span {
    font-size: 0.65rem;
  }
  div.time {
    width: 100%;
    justify-content: space-between;
  }
</style>