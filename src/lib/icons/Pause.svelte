<script>
  import { paused } from "$lib/store";

  function playtoggle() {
    $paused = !$paused;
  }
</script>

<svg
  class="glow"
  on:click={playtoggle}
  on:keypress={playtoggle}
  xmlns="http://www.w3.org/2000/svg"
  width="32" height="32" viewBox="0 0 32 32" ><path fill="currentColor" d="M6.75 3A2.75 2.75 0 0 0 4 5.75v16.5A2.75 2.75 0 0 0 6.75 25h3a2.75 2.75 0 0 0 2.75-2.75V5.75A2.75 2.75 0 0 0 9.75 3h-3Zm11.5 0a2.75 2.75 0 0 0-2.75 2.75v16.5A2.75 2.75 0 0 0 18.25 25h3A2.75 2.75 0 0 0 24 22.25V5.75A2.75 2.75 0 0 0 21.25 3h-3Z" /></svg>