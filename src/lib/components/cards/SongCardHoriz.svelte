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
      artist: truncate(subtitle, 30),
      image: image,
      url: dec_url,
    };
  }
</script>

<div
  class="item"
  on:click={() => {
    play(enc, title, subtitle, image, kbps320);
  }}
  on:keypress={() => {
    play(enc, title, subtitle, image, kbps320);
  }}
>
  <div class="iteminner flex flex-dirc hover">
    <img loading="lazy" src={image.replace("150x150", "500x500")} alt={title} />
    <span style:font-size="0.7rem" style:font-weight="bold">
      {truncate(title, 20)}
    </span>
  </div>
</div>

<style>
  .item {
    display: inline-block;
    border-radius: 0.3rem;
    height: 9rem;
    width: 8rem;
    margin-left: 0.2rem;
    transition: 0.3s;
  }
  .item img {
    width: 100%;
    border-radius: 0.3rem;
  }
  .iteminner {
    gap: 0.5rem;
  }
</style>
