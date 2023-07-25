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

<button class="flex flex-jc flex-ac" on:click={enqueue}>
  <EnqueueIcon />
    Enqueue
</button>

<style>
  button {
    margin-top: 0.5rem;
    border: 0;
    padding: 0.2rem;
    border-radius: 0.3rem;
  }
  button:hover {
    background-color: lightskyblue;
  }
</style>