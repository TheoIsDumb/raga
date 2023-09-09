<script>
  import { goto } from "$app/navigation"
  export let data

  function gotoalbum(albumid) {
    goto(`/album/${albumid}`)
  }
</script>

<div class="inner flex flex-col pb-2">
  <div class="grid gap-2 grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
    {#each data.results as album}
      <div
        class="album flex flex-col p-2 rounded cursor-pointer gap-2 transition duration-300 bg-zinc-900 hover:bg-zinc-800"
        on:click={gotoalbum(album.id)}
        on:keypress={gotoalbum(album.id)}
      >
        <img
          class="w-full aspect-square rounded object-cover"
          loading="lazy"
          src={album.image}
          alt={album.title}
        />

        <div class="info flex flex-col truncate">
          <span class="font-bold">{@html album.title}</span>
          <span class="text-sm">{@html album.subtitle}</span>
          <span class="text-sm">{album.year}</span>
        </div>
      </div>
    {/each}
  </div>
</div>