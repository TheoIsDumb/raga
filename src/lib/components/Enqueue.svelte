<script>
  import { currentPlaylist, active } from '$lib/store'
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
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3V8h3V6h-5z"/></svg>
    Enqueue
</button>

<style>
  button {
    gap: 0.5rem;
    margin-top: 0.5rem;
    border: 0;
    color: var(--bg);
    padding: 0.2rem;
    background: var(--fg);
    border-radius: 0.3rem;
    width: 8rem;
    align-self: end;
  }
  button:hover {
    background-color: darkgray;
  }
</style>