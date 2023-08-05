<script>
  import { currentPlaylist, active } from '$lib/store'
  import EnqueueIcon from '$lib/icons/EnqueueIcon.svelte';
  export let list = [];

  function enqueue() {
    if ($currentPlaylist.length === 0) {
      $currentPlaylist = list
      $active = $currentPlaylist[0]
    } else {
      list.forEach((item) => {
        $currentPlaylist.push(item)
      })
    }
  }
</script>

<button on:click={enqueue}
  class="flex justify-center items-center gap-1 rounded w-28 self-end bg-gray-600 hover:bg-gray-500 mt-2">
    <EnqueueIcon />
      Enqueue
</button>