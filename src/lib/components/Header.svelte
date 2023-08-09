<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { query, accentColor, SidebarVisible } from "$lib/store";

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

<div class="topheader flex flex-col items-center gap-4 xl:gap-0 w-full py-4">
  <div class="icons flex w-full justify-between">
    <button class="xl:hidden" on:click={() => $SidebarVisible = !$SidebarVisible}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" width="16" height="16" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"/></svg>
    </button>

    <a class="home flex items-center h-6 w-6 xl:hidden" href="/"><Logo2/></a>

    <a href="https://github.com/theoisdumb/raga"
      class="github flex items-center h-6 w-6 xl:hidden"
      target="_blank" rel="noreferrer">
      <Github />
    </a>
  </div>

  <div class="h1_and_input flex w-full justify-between">
    <h1 class="hidden xl:inline text-2xl font-bold">raga.</h1>

    <input
      class="bg-transparent border-2 border-solid border-{$accentColor} focus:border-[gainsboro]
        text-center rounded w-full xl:w-1/2 xl:h-8 p-1 xl:p-2 outline-none transition duration-300"
      type="text"
      bind:value={$query}
      placeholder="Search..."
      on:keypress={handleInput}
      autocomplete="off"
    />
  </div>
</div>