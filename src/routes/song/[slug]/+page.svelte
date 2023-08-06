<script>
  export let data
  import { active, currentPlaylist, index } from "$lib/store";

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
</script>

<div class="h-[calc(100dvh-5rem)] w-full flex justify-center items-center flex-col lg:flex-row gap-4">
  <img class="rounded-lg" src={song.image.replace('150x150', '500x500')} alt={song.title}/>

  <div class="info w-full lg:w-[500px] flex justify-between lg:items-start lg:flex-col gap-2">
    <div class="truncate">
      <div class="font-bold">{@html song.title}</div>
      <div>{@html song.subtitle.split('-')[0]}</div>
      <div><a class="font-bold" href="/album/{song.more_info.album_id}" alt={song.more_info.album}>{song.more_info.album}</a></div>
      <div class="capitalize">{@html song.language}</div>
      <div>{@html song.year}</div>
    </div>

    <button class="cursor-pointer" on:click={playSong}>
      <svg class="glow w-12 h-12" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12zm8.528-4.882a1 1 0 0 1 1.027.05l6 4a1 1 0 0 1 0 1.664l-6 4A1 1 0 0 1 9 16V8a1 1 0 0 1 .528-.882z" clip-rule="evenodd"/></svg>
    </button>
  </div>
</div>