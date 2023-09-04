<script>
  import { active, currentPlaylist, index } from "$lib/store"

  import { Button, Dropdown, DropdownItem } from 'flowbite-svelte'
  import { page } from '$app/stores'

  import OptionsIcon from '$lib/icons/OptionsIcon.svelte'

  export let list = []
  export let type
  let copyButtonText = "Copy Link"
  let playNextButtonText = "Play Next"

  async function playSong(item) {
      $currentPlaylist = [item];
      $index = 0;
      $active = $currentPlaylist[$index];

      const resp = await fetch(`/api/reco?songid=${$active.id}`);

      const addData = await resp.json();

      addData.forEach((song) => {
        $currentPlaylist.push(song);
      });
      $currentPlaylist = $currentPlaylist;
    }

  function playSongFromAlbum(item, i) {
      if (list.length !== 0) {
        $currentPlaylist = list;
      } 

      $index = i
      $active = $currentPlaylist[$index]
  }

  async function copy(id) {
    try {
      await navigator.clipboard.writeText(`${$page.url.origin}/song/${id}`);
      copyButtonText = "✓ Copied!"
      setTimeout(() => copyButtonText = "Copy", 1500)
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  async function playNext(item) {
    if ($currentPlaylist.some((i) => i.id === item.id) === false) {
        $currentPlaylist.splice($index+1, 0, item)

        playNextButtonText = "✓ Up Next!"
        setTimeout(() => playNextButtonText = "Play Next", 1500)
    } else {
        playNextButtonText = "🗙 Song already in list."
        setTimeout(() => playNextButtonText = "Play Next", 1500)
    }
  }
</script>

{#each list as item, i}
  <div class="song_container cursor-pointer flex">
    <div class="song flex hover items-center w-full overflow-hidden gap-2 rounded" on:click={() => {
      if (type === "song") {
        playSong(item);
      } else if (type === "album") {
        playSongFromAlbum(item, i);
      }
      }}>
    <img class="rounded h-14" src={item.image} alt={item.title}/>

    <div class="info flex flex-col w-full overflow-hidden">
      <div class="font-bold truncate">{@html item.title}</div>
      <div class="truncate text-gray-400 text-xs">{@html item.subtitle}</div>
    </div>
  </div>

  <Button class="outline-0"><OptionsIcon/></Button>
  <Dropdown class="bg-zinc-900 text-white w-40" placement="left">
    <DropdownItem class="hover:bg-indigo-950" on:click={() => copy(item.id)}>{copyButtonText}</DropdownItem>
    <DropdownItem class="hover:bg-indigo-950" on:click={() => playNext(item)}>{playNextButtonText}</DropdownItem>
  </Dropdown>
</div>
{/each}