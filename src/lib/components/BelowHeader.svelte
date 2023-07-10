<script>
  import { query } from "$lib/store";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  $: pathname = $page.url.pathname;

  let buttons = [
    { id: `Songs`, link: `/search/songs?q=${$query}` },
    { id: `Albums`, link: `/search/albums?q=${$query}&index=1` },
    { id: `Artists`, link: `/search/artists?q=${$query}` },
    { id: `Playlists`, link: `/search/playlists?q=${$query}` },
  ];
</script>

<div class="buttons flex">
  {#each buttons as btn}
    <button
      class:clicked={pathname.includes(btn.id.toLowerCase())}
      on:click={() => {
        if (query != "") {
          goto(btn.link);
        }
      }}>{btn.id}</button
    >
  {/each}
</div>

<style>
  div.buttons {
    width: 100%;
    align-items: stretch;
    margin: 1rem 0;
    gap: 0.5rem;
  }
  div.buttons button {
    flex: 1;
    background-color: transparent;
    color: var(--fg);
    border: 2px solid var(--fg);
    border-radius: 0.3rem;
    padding: 0.2rem;
    cursor: pointer;
    font-size: 1.1rem;
    transition: 0.1s;
  }
  div.buttons button:hover {
    border-left: 1rem solid var(--fg);
  }
  .clicked {
    background-color: var(--fg) !important;
    color: var(--base) !important;
    border-left: 0 !important;
  }
</style>
