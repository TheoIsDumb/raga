<script>
  import { query } from "$lib/store";
  import { goto } from "$app/navigation";

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
      class="hover"
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
    background-color: var(--fg);
    border: 0;
    border-radius: 0.3rem;
    padding: 0.2rem;
    cursor: pointer;
  }
  div.buttons button:hover {
    background-color: var(--base);
    color: white;
  }
</style>
