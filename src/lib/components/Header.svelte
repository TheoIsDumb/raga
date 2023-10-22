<script>
  import { goto } from "$app/navigation"
  import { page } from "$app/stores"
  import { query, accentColor } from "$lib/store"

  const handleInput = (e) => {
    if (e.key === "Enter" && $query !== "") {
      let q = encodeURI($query)
      goto(`/search/songs?q=${q}`)
    }
  }

  if ($query === "") $query = $page.url.searchParams.get("q") || "" 
</script>

<div class="topheader flex w-full pt-4 pb-2">
  <div class="h1_and_input flex w-full justify-between">
    <h1 class="hidden xl:inline text-2xl font-bold">raga.</h1>

    <input
      class="bg-transparent border-2 border-{$accentColor} focus:border-[gainsboro]
        text-center rounded-md xl:rounded w-full xl:w-1/2 xl:h-8 p-1 xl:p-2 outline-none transition duration-300"
      type="text"
      bind:value={$query}
      placeholder="Search..."
      on:keypress={handleInput}
      autocomplete="off"
    />
  </div>
</div>