<script>
  import { truncate } from "$lib/utils";
  import { index } from "$lib/store";

  export let item;
  export let i;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="song flex flex-ac hover" on:click={() => ($index = i)}>
  <img loading="lazy" src={item.image} alt={item.title} />

  <div class="info flex flex-dirc flex-jc">
    <div id="title">{@html truncate(item.title, 50)}</div>
    <div id="subtitle">{@html truncate(item.subtitle, 50)}</div>
  </div>

  {#if i === $index}
    <svg class="playing" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><rect width="2.8" height="12" x="1" y="6" fill="currentColor" ><animate attributeName="y" begin="svgSpinnersBarsScaleMiddle0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6" /><animate attributeName="height" begin="svgSpinnersBarsScaleMiddle0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12" /></rect ><rect width="2.8" height="12" x="5.8" y="6" fill="currentColor" ><animate attributeName="y" begin="svgSpinnersBarsScaleMiddle0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6" /><animate attributeName="height" begin="svgSpinnersBarsScaleMiddle0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12" /></rect ><rect width="2.8" height="12" x="10.6" y="6" fill="currentColor" ><animate id="svgSpinnersBarsScaleMiddle0" attributeName="y" begin="0;svgSpinnersBarsScaleMiddle1.end-0.1s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6" /><animate attributeName="height" begin="0;svgSpinnersBarsScaleMiddle1.end-0.1s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12" /></rect ><rect width="2.8" height="12" x="15.4" y="6" fill="currentColor" ><animate attributeName="y" begin="svgSpinnersBarsScaleMiddle0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6" /><animate attributeName="height" begin="svgSpinnersBarsScaleMiddle0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12" /></rect ><rect width="2.8" height="12" x="20.2" y="6" fill="currentColor" ><animate id="svgSpinnersBarsScaleMiddle1" attributeName="y" begin="svgSpinnersBarsScaleMiddle0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6" /><animate attributeName="height" begin="svgSpinnersBarsScaleMiddle0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12" /></rect ></svg >
  {/if}
</div>

<style>
  div.song {
    width: 100%;
    gap: 1rem;
    cursor: pointer;
    border-radius: 0.3rem;
  }
  div.song img {
    border-radius: 0.2rem;
    height: 3.5rem;
  }
  div#title,
  div#subtitle {
    font-weight: bold;
  }
  div#subtitle {
    font-size: 0.7rem;
    color: darkgray;
  }
  div.info {
    justify-content: start;
  }
  svg {
    margin-left: auto;
    margin-right: 1rem;
  }
</style>
