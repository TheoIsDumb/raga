<script>
  import { paused } from '$lib/store'

  function playtoggle() {
    $paused = !$paused;
  }
</script>

<svg
  class="glow"
  on:click={playtoggle}
  on:keypress={playtoggle}
  xmlns="http://www.w3.org/2000/svg"
  width="32"
  height="32"
  viewBox="0 0 512 512"
  ><path fill="currentColor" d="m96 448l320-192L96 64v384z" /></svg
>
