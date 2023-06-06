<script>
  import Clear from "$lib/icons/Clear.svelte";
  import LeftArrow from "$lib/icons/LeftArrow.svelte";
  import Spinner from "$lib/icons/Spinner.svelte";

  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { navigating } from "$app/stores";

  let query = "";

  const handleInput = (e) => {
    if (e.key === "Enter") {
      goto(`/results/${query}`);
    }
  };
</script>

<div class="header flex flex-ac">
  {#if $page.url.pathname !== "/"}
    <LeftArrow />
  {/if}

  <input
    type="text"
    bind:value={query}
    placeholder="Search..."
    on:keypress={handleInput}
    autocomplete="off"
  />
  {#if query !== ""}
    <Clear bind:query />
  {/if}

  {#if $navigating}
    <Spinner />
  {/if}
</div>

<style>
  div.header {
    width: 96%;
    max-width: 900px;
    background-color: rgb(42, 41, 41);
    font-size: 1rem;
    border-radius: 0 0 0.4rem 0.4rem;
    padding: 0.3rem 0.8rem;
    margin-bottom: 0.5rem;
    text-align: center;
    gap: 0.5rem;
    transition: all 0.2s;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%);
  }
  div.header:focus-within {
    background-color: rgb(61, 61, 61);
  }
  input {
    all: unset;
    flex-grow: 2;
    width: 100%;
    transition: all 0.6s;
  }
</style>
