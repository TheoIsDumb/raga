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

<div class="progresstime flex flex-ac">
  <span>{format(currentTime)}</span>

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

  <span>{format(duration)}</span>
</div>

<style>
  .slider {
    width: 100%;
    border: 1px solid var(--fg);
    border-radius: 1rem;
    height: 0.5rem;
  }
  .progessbar {
    width: calc(100 * var(--progress));
    height: inherit;
    border-radius: inherit;
    background-color: var(--fg);
    cursor: pointer;
  }
  div.progresstime {
    gap: 0.3rem;
    font-size: 0.8rem;
  }
  .flex {
    display: flex;
  }
  .flex-ac {
    align-items: center;
  }
</style>
