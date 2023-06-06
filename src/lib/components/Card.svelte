<script>
  import { decrypt } from "$lib/decrypt";
  import { active } from "$lib/store";
  export let image;
  export let title;
  export let subtitle;
  export let enc;
  export let kbps320;

  function truncate(input, limit) {
    if (input.length > limit) {
      return input.substring(0, limit) + "...";
    }
    return input;
  }

  function play(enc, title, subtitle, image, kbps320) {
    let dec_url = decrypt(enc, kbps320);

    $active = {
      name: truncate(title, 30),
      artist: truncate(subtitle, 30),
      cover: image,
      url: dec_url,
    };
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="song flex"
  on:click={() => {
    play(enc, title, subtitle, image, kbps320);
  }}
>
  <img src={image} alt={title} />

  <div class="info flex flex-jc flex-dirc">
    <div id="title">{@html truncate(title, 50)}</div>
    <div id="subtitle">{@html truncate(subtitle, 50)}</div>
  </div>
</div>

<style>
  div.song {
    width: 100%;
    height: 5rem;
    gap: 1rem;
    border: 1px solid rgb(77, 77, 77);
    border-radius: 0.5rem;
    padding: 0.7rem;
    cursor: pointer;
  }
  div.song img {
    border-radius: 0.2rem;
    border: 1px solid gray;
  }
  div#title {
    font-weight: bold;
  }
  div#subtitle {
    font-size: 0.7rem;
  }
</style>
