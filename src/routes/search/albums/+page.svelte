<script>
  import { goto } from "$app/navigation";
  export let data;

  function gotoalbum(albumid) {
    goto(`/album/${albumid}`);
  }
</script>

<div class="inner flex flex-col">
  <div class="grid gap-2 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {#each data.results as album}
      <div
        class="album flex flex-col p-2 rounded cursor-pointer gap-2 transition duration-300"
        on:click={gotoalbum(album.id)}
        on:keypress={gotoalbum(album.id)}
      >
        <img
          class="w-full aspect-square rounded object-cover"
          loading="lazy"
          src={album.image.replace("150x150", "500x500")}
          alt={album.title}
        />

        <div class="info flex flex-col">
          <span class="font-bold">{@html album.title}</span>
          <span class="text-sm">{@html album.subtitle}</span>
          <span class="text-sm">{album.year}</span>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  div.album { background-color: var(--base-dark); }
  div.album:hover { background-color: var(--base); }
</style>