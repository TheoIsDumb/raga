<script>
  import { active, currentPlaylist, index } from "$lib/store"
  import { format } from "../Seekbar2.svelte";
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
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="song flex hover items-center w-full overflow-hidden gap-2 rounded"
    on:click|self={() => type === "song" ? playSong(item) : playSongFromAlbum(item, i)}>
    <img class="rounded h-14" src={item.image} alt={item.title}/>

    <div class="info flex w-full overflow-hidden justify-between items-center xl:pr-2">
      <div class="flex flex-col leading-3 text-gray-300 text-xs">
        <div class="font-bold truncate text-sm">{@html item.title}</div>
        <div>
          {#each item.more_info.artistMap.primary_artists as artist, i}
            {@const artists = item.more_info.artistMap.primary_artists}
            <a class="truncate hover:underline hover:underline-offset-1" href="/artist/{artist.id}">
              {@html i !== artists.length - 1 ? artist.name + ', ' : artist.name}
            </a>
          {/each}

          <span>-</span>

          <a class="truncate hover:underline hover:underline-offset-1" href="/album/{item.more_info.album_id}">
            {@html item.subtitle.split('- ')[1]}
          </a>
        </div>

      </div>
        <span class="text-xs hidden lg:inline">{format(item.more_info.duration)}</span>
    </div>
  </div>

  <Options {item}/>
</div>
{/each}