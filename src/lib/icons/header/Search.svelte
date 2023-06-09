<script>
  import { slide } from "svelte/transition";
  import { goto } from "$app/navigation";
  import { query } from "$lib/store";

  const handleSearchClick = (e) => {
    if ($query !== "") {
      goto(`/search/songs/${$query}`);
    }
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<svg
  transition:slide
  on:click={handleSearchClick}
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  ><path
    fill="currentColor"
    d="M10 2.75a7.25 7.25 0 0 1 5.63 11.819l4.9 4.9a.75.75 0 0 1-.976 1.134l-.084-.073l-4.901-4.9A7.25 7.25 0 1 1 10 2.75Zm0 1.5a5.75 5.75 0 1 0 0 11.5a5.75 5.75 0 0 0 0-11.5Z"
  /></svg
>
