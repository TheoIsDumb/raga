<script>
  export let data
  import SongCard from "$lib/components/cards/SongCard.svelte"
  import { onMount } from 'svelte'
  import { query } from "$lib/store.js"

  let index = 1
  let results = data.results
  let loading = false

  const loadMore = async (e) => {
    if (index <= 15) {
      loading = true
      index++
      const resp = await fetch(`/api/search/songs?q=${$query}&index=${index}`)
      const addData = await resp.json()
      addData.results.forEach((song) => results.push(song))
      results = results
      loading = false
    }
  }

  onMount(() => {
    async function callback(entries) {
      let lastcard = entries[0]

      if (lastcard.isIntersecting) {
        await loadMore()
        obsrvr.unobserve(lastcard.target)
        obsrvr.observe(document.querySelector('.songcard:last-of-type'))
      }
    }

    const obsrvr = new IntersectionObserver(callback, { threshold: 1 })
    obsrvr.observe(document.querySelector('.songcard:last-of-type'))
  })
</script>

<div class="inner flex flex-col pb-4">
  <SongCard type="song" list={results} />

  {#if loading}
    <div class="w-full flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24"><circle cx="4" cy="12" r="3" fill="currentColor"><animate id="svgSpinners3DotsFade0" fill="freeze" attributeName="opacity" begin="0;svgSpinners3DotsFade1.end-0.25s" dur="0.75s" values="1;.2"/></circle><circle cx="12" cy="12" r="3" fill="currentColor" opacity=".4"><animate fill="freeze" attributeName="opacity" begin="svgSpinners3DotsFade0.begin+0.15s" dur="0.75s" values="1;.2"/></circle><circle cx="20" cy="12" r="3" fill="currentColor" opacity=".3"><animate id="svgSpinners3DotsFade1" fill="freeze" attributeName="opacity" begin="svgSpinners3DotsFade0.begin+0.3s" dur="0.75s" values="1;.2"/></circle></svg>
    </div>
  {/if}
</div>