<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { query } from "$lib/store";
  import { fade } from "svelte/transition";

  import Logo2 from "$lib/icons/Logo2.svelte";

  const handleInput = (e) => {
    if (e.key === "Enter" && $query !== "") {
      let q = encodeURI($query);
      goto(`/search/songs?q=${q}`);
    }
  };

  if ($query === "") {
    $query = $page.url.searchParams.get("q") || "";
  }
  let isShown = false;
</script>

<div class="header flex flex-ac">
  <Logo2 />

  {#if isShown}
    <input
      transition:fade
      type="text"
      bind:value={$query}
      placeholder="Search..."
      on:keypress={handleInput}
      autocomplete="off"
    />
  {/if}

  <div class="buttons flex flex-ac">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <svg
      class="glow search"
      on:click={() => (isShown = !isShown)}
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 24 24"
      ><path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2.5"
        d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z"
      /></svg
    >

    <a
      href="https://github.com/theoisdumb/paattu"
      target="_blank"
      rel="noreferrer"
    >
      <svg
        class="glow github"
        xmlns="http://www.w3.org/2000/svg"
        width="1.5rem"
        height="1.5rem"
        viewBox="0 0 24 24"
        ><path
          fill="currentColor"
          d="M12.001 2c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.563 4.938c.363.312.676.912.676 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z"
        /></svg
      >
    </a>
  </div>
</div>

<style>
  div.header {
    justify-content: space-between;
    height: 2.5rem;
  }
  div.buttons {
    gap: 0.5rem;
  }
  a {
    all: unset;
    height: 1.5rem;
  }
  input[type="text"] {
    background-color: transparent;
    color: var(--fg);
    text-align: center;
    border: 0.08rem solid gray;
    border-radius: 0.3rem;
    outline: 0;
    width: 60%;
    transition: all 0.3s;
  }
  input[type="text"]:focus {
    border: 0.08rem solid var(--fg);
  }
  @media (max-width: 900px) {
    div.header {
      gap: 0.5rem;
      padding: 0.5rem;
    }
    input[type="text"] {
      max-width: 50%;
      height: 1.5rem;
    }
  }
  @media (max-width: 900px) {
    div.header {
      height: 70%;
    }
  }
</style>
