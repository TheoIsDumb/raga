<script>
  export let data
  import { active, currentPlaylist, index } from "$lib/store"

  import Play from "$lib/icons/Play.svelte"
  import PlayNext from "$lib/icons/PlayNext.svelte"

  let song = data.songs[0]

  async function playSong() {
      $currentPlaylist = [song]
      $index = 0
      $active = $currentPlaylist[$index]

      const resp = await fetch(`/api/reco?songid=${$active.id}`)

      const addData = await resp.json()

      addData.forEach((song) => {
        $currentPlaylist.push(song)
      })
      $currentPlaylist = $currentPlaylist
    }

    let playNext = () => {
        if ($currentPlaylist.some((i) => i.id === song.id) === false) {
            $currentPlaylist.splice($index+1, 0, song)
        }
    }
</script>

<div class="h-[calc(100dvh-8rem)] flex justify-center items-center flex-col gap-2">
  <img class="rounded-lg" src={song.image} alt={song.title}/>

  <div class="info flex flex-col gap-2 items-center">
    <div class="truncate text-center">
      <div class="font-bold">{@html song.title}</div>
      <div>{@html song.subtitle.split('-')[0]}</div>
      <a class="underline" href="/album/{song.more_info.album_id}" alt={song.more_info.album}>{@html song.more_info.album}</a>
      <div>{@html song.year}</div>
    </div>

    <div class="flex gap-8">
      <button class="cursor-pointer" on:click={playSong}>
        <Play/>
      </button>

      <button class="cursor-pointer" on:click={playNext}>
        <PlayNext/>
      </button>
    </div>
  </div>
</div>