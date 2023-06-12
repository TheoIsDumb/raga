<script>
  import { decrypt, truncate } from "$lib/utils";
  import { active } from "$lib/store";
  export let image;
  export let title;
  export let subtitle;
  export let enc;
  export let kbps320;

  function play(enc, title, subtitle, image, kbps320) {
    let dec_url = decrypt(enc, kbps320);

    $active = {
      name: truncate(title, 30),
      artist: truncate(subtitle, 50),
      image: image,
      url: dec_url,
    };
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="song flex"
  title={enc}
  on:click={() => {
    play(enc, title, subtitle, image, kbps320);
  }}
>
  <img loading="lazy" src={image} alt={title} />

  <div class="info flex flex-jc flex-dirc">
    <div id="title">{@html truncate(title, 50)}</div>
    <div id="subtitle">{@html truncate(subtitle, 50)}</div>
  </div>
</div>

<style>
  div.song {
    width: 100%;
    gap: 1rem;
    cursor: pointer;
    transition: all 0.3s;
    border-radius: 0.3rem;
  }
  div.song:hover {
    background-color: var(--base);
  }
  div.song img {
    border-radius: 0.2rem;
    height: 3.5rem;
  }
  div#title {
    font-weight: bold;
  }
  div#subtitle {
    font-size: 0.7rem;
  }
</style>
