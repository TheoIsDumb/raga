<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { query } from "$lib/store";

  import Logo2 from "$lib/icons/Logo2.svelte";
  import Github from "$lib/icons/Github.svelte";

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

<div class="topheader flex flex-ac">
  <a class="home flex flex-ac" href="/"> <Logo2 /> </a>

    <input
      type="text"
      bind:value={$query}
      placeholder="Search..."
      on:keypress={handleInput}
      autocomplete="off"
    />

    <a href="https://github.com/theoisdumb/paattu"
      class="github flex flex-ac"
      target="_blank" rel="noreferrer">
      <Github />
    </a>
</div>

<style>
  .topheader {
    justify-content: space-between;
    height: 3rem;
    gap: 0.8rem;
  }
  a {
    color: var(--fg);
    text-decoration: none;
  }
  input[type="text"] {
    background-color: transparent;
    color: var(--fg);
    text-align: center;
    border: 0.1rem solid gray;
    border-radius: 0.3rem;
    outline: 0;
    width: 100%;
    transition: all 0.3s;
    height: 2rem;
  }
  input[type="text"]:focus {
    border: 0.1rem solid var(--fg);
  }
  :global(.topheader svg) {
    height: 2rem;
    width: 2rem;
  }
</style>