<script>
    let currentId;
    let time;
    import { currentPlaylist, currentTime, index, paused, active } from "$lib/store";
    import {dndzone} from "svelte-dnd-action";

    async function handleDndConsider(e) {
        currentId = $active.title;
        time = $currentTime;
        $currentPlaylist = e.detail.items;
    }
    async function handleDndFinalize(e) {
        $currentPlaylist = e.detail.items;
        $currentTime = time;
        $index = $currentPlaylist.findIndex(item => item.title === currentId);
    }

    function playSongFromCurrentPlaylist(i) {
        $index = i;
    }
</script>

<div class="playlist scrollable flex flex-dirc" use:dndzone="{{items: $currentPlaylist, flipDurationMs: 300}}" on:consider="{handleDndConsider}" on:finalize="{handleDndFinalize}" >
    {#each $currentPlaylist as item, i (item.id)}
        <div class="card flex flex-ac hover" on:click={() => playSongFromCurrentPlaylist(i)}>
            <div class="img_container">
                {#if i === $index && $paused === false}
                    <svg class="playing" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><rect width="2.8" height="12" x="1" y="6" fill="currentColor" ><animate attributeName="y" begin="svgSpinnersBarsScaleMiddle0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6" /><animate attributeName="height" begin="svgSpinnersBarsScaleMiddle0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12" /></rect ><rect width="2.8" height="12" x="5.8" y="6" fill="currentColor" ><animate attributeName="y" begin="svgSpinnersBarsScaleMiddle0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6" /><animate attributeName="height" begin="svgSpinnersBarsScaleMiddle0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12" /></rect ><rect width="2.8" height="12" x="10.6" y="6" fill="currentColor" ><animate id="svgSpinnersBarsScaleMiddle0" attributeName="y" begin="0;svgSpinnersBarsScaleMiddle1.end-0.1s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6" /><animate attributeName="height" begin="0;svgSpinnersBarsScaleMiddle1.end-0.1s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12" /></rect ><rect width="2.8" height="12" x="15.4" y="6" fill="currentColor" ><animate attributeName="y" begin="svgSpinnersBarsScaleMiddle0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6" /><animate attributeName="height" begin="svgSpinnersBarsScaleMiddle0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12" /></rect ><rect width="2.8" height="12" x="20.2" y="6" fill="currentColor" ><animate id="svgSpinnersBarsScaleMiddle1" attributeName="y" begin="svgSpinnersBarsScaleMiddle0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6" /><animate attributeName="height" begin="svgSpinnersBarsScaleMiddle0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12"/></rect></svg>
                {:else if i === $index && $paused === true}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12c0-1.19.22-2.32.6-3.38l1.88.68C4.17 10.14 4 11.05 4 12c0 4.41 3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8c-.95 0-1.85.17-2.69.48l-.68-1.89C9.69 2.22 10.82 2 12 2c5.52 0 10 4.48 10 10zM5.5 4C4.67 4 4 4.67 4 5.5S4.67 7 5.5 7S7 6.33 7 5.5S6.33 4 5.5 4zM11 16V8H9v8h2zm4 0V8h-2v8h2z"/></svg>
                {/if}
                <img src={item.image} alt={item.title} style="{i === $index ? 'filter: brightness(50%);' : ''}"/>
            </div>

            <div class="info flex flex-dirc">
                <div class="title">{@html item.title}</div>
                <div class="subtitle">{@html item.subtitle}</div>
            </div>

            <svg class="drag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 18a1 1 0 1 0 2 0a1 1 0 0 0-2 0Zm-6 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0Zm6-6a1 1 0 1 0 2 0a1 1 0 0 0-2 0Zm-6 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0Zm6-6a1 1 0 1 0 2 0a1 1 0 0 0-2 0ZM8 6a1 1 0 1 0 2 0a1 1 0 0 0-2 0Z"/></svg>
        </div>
    {/each}
</div>

<style>
    div.img_container {
        position: relative;
        color: white;
    }
    div.info {
        width: 100%;
    }
    svg.drag {
        height: 1.5rem;
        width: 1.5rem;
        margin-right: 1rem;
    }
    .img_container svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
    }
    div.playlist {
        overflow: scroll;
        scrollbar-width: thin;
        gap: 0.5rem;
    }
    div.card {
        gap: 0.5rem;
    }
    div.title {
        font-weight: bold;
    }
    div.subtitle {
        font-size: 0.8rem;
        opacity: 0.6;
    }
    img {
        height: 3.5rem;
        border-radius: 0.3rem;
    }
    .title, .info, .subtitle {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
  }
  @media (hover: none) {
    .playlist::-webkit-scrollbar {
        width: 1rem;
    }
    .playlist::-webkit-scrollbar-thumb {
        border-radius: 2rem;
    }
    .playlist {
        scrollbar-width: auto !important;
    }
  }
</style>
