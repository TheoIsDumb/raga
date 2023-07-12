<script>
  import Clear from "$lib/icons/header/Clear.svelte";
  import LeftArrow from "$lib/icons/header/LeftArrow.svelte";
  import Search from "$lib/icons/header/Search.svelte";

  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { query } from "$lib/store";

  const handleInput = (e) => {
    if (e.key === "Enter" && $query !== "") {
      let q = encodeURI($query);
      goto(`/search/songs?q=${q}`);
    }
  };

  if ($query === "") {
    $query = $page.url.searchParams.get("q") || "";
  }
</script>

<div class="header flex flex-ac">
  {#if $page.url.pathname !== "/"}
    <LeftArrow />
  {/if}

  <input
    type="text"
    bind:value={$query}
    placeholder="Search..."
    on:keypress={handleInput}
    autocomplete="off"
  />

  {#if $query !== ""}
    <Clear />
    <Search />
  {/if}
</div>

<style>
  div.header {
    width: 100%;
    max-width: 900px;
    background-color: var(--base-dark);
    font-size: 1rem;
    border-radius: 0 0 0.4rem 0.4rem;
    padding: 0.3rem 0.8rem;
    text-align: center;
    gap: 0.5rem;
    transition: all 0.2s;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    z-index: 100;
  }
  div.header:focus-within {
    background-color: var(--base);
  }
  input {
    all: unset;
    width: 100%;
  }
  :global(.header svg) {
    cursor: pointer;
  }
</style>
