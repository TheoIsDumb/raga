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

<div class="topheader flex items-center gap-2 h-12 px-2">
  <a class="home flex items-center h-8 w-8" href="/"><Logo2/></a>

    <input
      class="bg-transparent border-2 border-solid border-gray-500 focus:border-gray-400
        text-center rounded w-full outline-none transition duration-300 text-gainsboro"
      type="text"
      bind:value={$query}
      placeholder="Search..."
      on:keypress={handleInput}
      autocomplete="off"
    />

    <a href="https://github.com/theoisdumb/raga"
      class="github flex items-center h-8 w-8"
      target="_blank" rel="noreferrer">
      <Github />
    </a>
</div>