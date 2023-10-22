<script>
  import { active, currentPlaylist, index } from "$lib/store"
  import Options from '$lib/components/Options.svelte'

  export let list = []
  export let type

  async function playSong(item) {
      $currentPlaylist = [item]
      $index = 0
      $active = $currentPlaylist[$index]

      const resp = await fetch(`/api/reco?songid=${$active.id}`)

      const addData = await resp.json()

      addData.forEach((song) => {
        $currentPlaylist.push(song)
      })
      $currentPlaylist = $currentPlaylist
    }

  function playSongFromAlbum(item, i) {
      if (list.length !== 0) {
        $currentPlaylist = list
      } 

      $index = i
      $active = $currentPlaylist[$index]
  }
</script>

{#each list as item, i}
  <div class="songcard cursor-pointer flex">
    <div class="song flex hover items-center w-full overflow-hidden gap-2 rounded"
    on:click={() => {
      if (type === "song") {
        playSong(item)
      } else if (type === "album") {
        playSongFromAlbum(item, i)
      }
      }}>
    <img class="rounded h-14" src={item.image} alt={item.title}/>

    <div class="info flex flex-col w-full overflow-hidden">
      <div class="font-bold truncate text-sm">{@html item.title}</div>
      <div class="truncate text-gray-400 text-xs">{@html item.subtitle}</div>
    </div>
  </div>

  <Options {item}/>
</div>
{/each}