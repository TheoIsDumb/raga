<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { query, accentColor } from "$lib/store";

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

<div class="topheader flex items-center gap-2 h-12">
  <a class="home flex items-center h-8 w-8 xl:hidden" href="/"><Logo2/></a>

    <input
      class="bg-transparent border-2 border-solid border-{$accentColor} focus:border-[gainsboro]
        text-center rounded w-full xl:w-2/3 mx-auto xl:h-8 xl:p-2 outline-none transition duration-300"
      type="text"
      bind:value={$query}
      placeholder="Search..."
      on:keypress={handleInput}
      autocomplete="off"
    />

    <a href="https://github.com/theoisdumb/raga"
      class="github flex items-center h-8 w-8 xl:hidden"
      target="_blank" rel="noreferrer">
      <Github />
    </a>
</div>