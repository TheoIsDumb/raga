<script>
  export let data
  import { active, currentPlaylist, index } from "$lib/store";

  import Play from "$lib/icons/Play.svelte";
  import PlayNext from "$lib/icons/PlayNext.svelte";

  let song = data.songs[0]

  async function playSong() {
      $currentPlaylist = [song];
      $index = 0;
      $active = $currentPlaylist[$index];

      const resp = await fetch(`/api/reco?songid=${$active.id}`);

      const addData = await resp.json();

      addData.forEach((song) => {
        $currentPlaylist.push(song);
      });
      $currentPlaylist = $currentPlaylist;
    }

    let playNext = () => {
        if ($currentPlaylist.some((i) => i.id === song.id) === false) {
            $currentPlaylist.splice($index+1, 0, song)
        }
    }
</script>

<div class="h-[calc(100dvh-8rem)] w-full flex justify-center items-center flex-col lg:flex-row gap-4">
  <img class="rounded-lg" src={song.image} alt={song.title}/>

  <div class="info w-full lg:w-[500px] flex flex-col gap-2">
    <div class="truncate">
      <div class="font-bold">{@html song.title}</div>
      <div>{@html song.subtitle.split('-')[0]}</div>
      <div><a class="font-bold" href="/album/{song.more_info.album_id}" alt={song.more_info.album}>{song.more_info.album}</a></div>
      <div>{@html song.year}</div>
    </div>

    <div class="flex">
      <button class="cursor-pointer mr-8" on:click={playSong}>
        <Play/>
      </button>

      <button class="cursor-pointer" on:click={playNext}>
        <PlayNext/>
      </button>
    </div>

  </div>
</div>