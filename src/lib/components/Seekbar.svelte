<script>
  import { currentTime, duration } from '$lib/store'

  function format(time) {
    if (isNaN(time)) return "...";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }
</script>

<div class="progress flex flex-ac">
  <span>{format($currentTime)}</span>
  <div
    class="slider flex flex-ac"
    on:pointerdown={(e) => {
      const div = e.currentTarget;

      function seek(e) {
        const { left, width } = div.getBoundingClientRect();

        let p = (e.clientX - left) / width;
        if (p < 0) p = 0;
        if (p > 1) p = 1;

        $currentTime = p * $duration;
      }

      seek(e);

      window.addEventListener("pointermove", seek);

      window.addEventListener(
        "pointerup",
        () => {
          window.removeEventListener("pointermove", seek);
        },
        {
          once: true,
        }
      );
    }}
  >
  <div class="progressbar flex flex-ac" style="--progress: {$currentTime / $duration}%">
      <svg class="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2z"/></svg>
    </div>

  </div>

  <span>{format($duration)}</span>
</div>

<style>
   .circle {
    height: 0.8rem;
    width: 0.8rem;
    fill: var(--fg);
    margin-right: -0.5rem;
  }
  .progress {
    gap: 1rem;
    user-select: none;
  }
  .progress span {
    font-size: 0.8rem;
  }
  .slider {
    width: 100%;
    height: 0.2rem;
    background-color: var(--base);
  }
  .progressbar {
    width: calc(100 * var(--progress));
    height: inherit;
    border-radius: inherit;
    background-color: var(--fg);
    cursor: pointer;
    justify-content: end;
  }
</style>
