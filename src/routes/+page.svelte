<script>
  export let data
  import HorizCard from "$lib/components/cards/HorizCard.svelte"
  import Logo2 from "$lib/icons/Logo2.svelte"
  import { fade } from "svelte/transition"

  let texts = ["സ്വാഗതം!", "स्वागत है!", "welcome!", "¡bienvenido!"]
  let index = 0
  $: text = texts[index]

  setInterval(() => {
    if (index === 3) {
      index = 0
    } else {
      index++
    }
  }, 200)
</script>

<div class="inner flex flex-col">
  <div class="relative w-full h-80 xl:h-40 bg-gradient-to-br flex gap-4 items-center justify-center from-indigo-500 to-sky-500 shadow-inner rounded-lg">
    <div class="h-20 w-20">
      <Logo2 />
    </div>

    {#key text}
      <span class="absolute bottom-2 text-white text-base" transition:fade>{text}</span>
    {/key}
  </div>

  <HorizCard array={data.charts} name="Charts" />
  <HorizCard array={data.top_playlists} name="Top Playlists" />
  <HorizCard array={data.new_albums} name="New Releases" />
</div>