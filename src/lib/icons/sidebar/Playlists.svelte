<script>
  import { query } from "$lib/store";
  import { goto } from "$app/navigation";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<svg
  on:click={() => {
    if ($query != "") {
      goto(`/search/playlists/${$query}`);
    }
  }}
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  ><g fill="none"
    ><path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M20 6h-6m6 4h-6m6 4h-8m8 4H4"
    /><path fill="currentColor" d="M8 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0z" /><path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M8 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0zm0 0V7m0 0h2V6H8v1z"
    /></g
  ></svg
>
