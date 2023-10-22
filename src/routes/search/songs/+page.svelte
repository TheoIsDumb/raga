<script>
  export let data
  import SongCard from "$lib/components/cards/SongCard.svelte"
  import Load from '$lib/icons/Load.svelte'
  import { onMount } from 'svelte'
  import { query } from "$lib/store.js"

  let index = 1
  let results = data.results
  let loading = false

  const loadMore = async () => {
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
      <Load />
    </div>
  {/if}
</div>