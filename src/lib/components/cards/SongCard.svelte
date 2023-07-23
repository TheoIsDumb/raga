<script>
  import { active, currentPlaylist, index } from "$lib/store";

  export let list = [];
  export let type;

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

  function playSongFromCurrentPlaylist(i) {
    $index = i;
  }
</script>

{#each list as item, i}
  <div class="song_container flex">
    <div class="song flex hover flex-ac" on:click={() => {
      if (type === "song") {
        playSong(item);
      } else if (type === "album") {
        playSongFromAlbum(item, i);
      } else if (type === "current") {
        playSongFromCurrentPlaylist(i)
      }
      }}>
    <img src={item.image} alt={item.title}/>

    <div class="info flex flex-jc flex-dirc">
      <div class="title">{@html item.title}</div>
      <div class="subtitle">{@html item.subtitle}</div>
    </div>
  </div>

  {#if type === "song" || type === "album"}
    <svg
    on:click={() => $currentPlaylist.splice($index+1, 0, item)}
    class="hover" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.4 10.6C16.55 9 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6Z"/></svg>
   {/if}

  {#if type === "current" && i === $index}
    <svg class="playing" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><rect width="2.8" height="12" x="1" y="6" fill="currentColor" ><animate attributeName="y" begin="svgSpinnersBarsScaleMiddle0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6" /><animate attributeName="height" begin="svgSpinnersBarsScaleMiddle0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12" /></rect ><rect width="2.8" height="12" x="5.8" y="6" fill="currentColor" ><animate attributeName="y" begin="svgSpinnersBarsScaleMiddle0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6" /><animate attributeName="height" begin="svgSpinnersBarsScaleMiddle0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12" /></rect ><rect width="2.8" height="12" x="10.6" y="6" fill="currentColor" ><animate id="svgSpinnersBarsScaleMiddle0" attributeName="y" begin="0;svgSpinnersBarsScaleMiddle1.end-0.1s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6" /><animate attributeName="height" begin="0;svgSpinnersBarsScaleMiddle1.end-0.1s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12" /></rect ><rect width="2.8" height="12" x="15.4" y="6" fill="currentColor" ><animate attributeName="y" begin="svgSpinnersBarsScaleMiddle0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6" /><animate attributeName="height" begin="svgSpinnersBarsScaleMiddle0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12" /></rect ><rect width="2.8" height="12" x="20.2" y="6" fill="currentColor" ><animate id="svgSpinnersBarsScaleMiddle1" attributeName="y" begin="svgSpinnersBarsScaleMiddle0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6" /><animate attributeName="height" begin="svgSpinnersBarsScaleMiddle0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12"/></rect></svg>
  {/if}
</div>
{/each}

<style>
  .song_container {
    width: 100%;
    gap: 0.5rem;
  }
  .song {
    width: 100%;
    overflow: hidden;
    gap: 0.5rem;
    border-radius: 0.3rem;
  }
  .song img {
    border-radius: 0.2rem;
    height: 3.5rem;
  }
  .info {
    width: 100%;
    overflow: hidden;
  }
  svg {
    height: auto;
    margin-left: auto;
    padding: 0.1rem;
  }
  .title {
    font-weight: bold;
  }
  .subtitle {
    color: gray;
    font-size: 0.7rem;
  }
  .title, .subtitle {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  svg.playing {
    margin-right: 1rem;
  }
</style>