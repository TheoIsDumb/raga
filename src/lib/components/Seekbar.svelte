<script>
  export let currentTime;
  export let duration;

  function format(time) {
    if (isNaN(time)) return "...";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }
</script>

<div
  class="slider flex flex-ac"
  on:pointerdown={(e) => {
    const div = e.currentTarget;

    function seek(e) {
      const { left, width } = div.getBoundingClientRect();

      let p = (e.clientX - left) / width;
      if (p < 0) p = 0;
      if (p > 1) p = 1;

      currentTime = p * duration;
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
  <div class="progessbar" style="--progress: {currentTime / duration}%" />
</div>

<div class="time flex">
  <span>{format(currentTime)}</span>
  <span>{format(duration)}</span>
</div>

<style>
  .slider {
    width: 100%;
    height: 0.5rem;
    background-color: var(--base);
  }
  .progessbar {
    width: calc(100 * var(--progress));
    height: inherit;
    border-radius: inherit;
    background-color: var(--fg);
    cursor: pointer;
  }
  .time {
    font-size: 0.8rem;
    width: 100%;
    justify-content: space-between;
  }
</style>
