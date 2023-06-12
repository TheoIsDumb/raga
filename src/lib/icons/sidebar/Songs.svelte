<script>
  import { query } from "$lib/store";
  import { goto } from "$app/navigation";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<svg
  on:click={() => {
    if ($query != "") {
      goto(`/search/songs/${$query}`);
    }
  }}
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  ><g fill="none"
    ><circle
      cx="6"
      cy="18"
      r="3"
      fill="currentColor"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    /><circle
      cx="18"
      cy="17"
      r="3"
      fill="currentColor"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    /><path fill="currentColor" d="M21 3L9 6v4l12-3V3z" /><path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M9 18v-8m12 7V7M9 10V6l12-3v4M9 10l12-3"
    /></g
  ></svg
>
