<script>
    let currentId;
    let time;
    let dragDisabled = true;

    import { currentPlaylist, currentTime, index, paused, active, } from "$lib/store";
    import { SOURCES, TRIGGERS, dndzone } from "svelte-dnd-action";
    import { flip } from "svelte/animate";

    import PlayIndicator from "$lib/icons/playIndicator.svelte";
    import PauseIndicator from "$lib/icons/pauseIndicator.svelte";
    import DragHandle from "$lib/icons/dragHandle.svelte";

    async function handleDndConsider(e) {
        currentId = $active.title;
        time = $currentTime;
        $currentPlaylist = e.detail.items;

        let {
            info: { source, trigger },
        } = e.detail;
        if (trigger === TRIGGERS.DRAG_STOPPED) {
            dragDisabled = true;
        }
    }
    async function handleDndFinalize(e) {
        $currentPlaylist = e.detail.items;
        $currentTime = time;
        $index = $currentPlaylist.findIndex((item) => item.title === currentId);

        let {
            info: { source },
        } = e.detail;
        if (source === SOURCES.POINTER) {
            dragDisabled = true;
        }
    }

    function startDrag(e) {
        e.preventDefault();
        dragDisabled = false;
    }

    function playSongFromCurrentPlaylist(i) {
        $index = i;
    }
</script>

<div
    class="playlist scrollable flex flex-dirc"
    use:dndzone={{
        items: $currentPlaylist,
        dragDisabled,
        flipDurationMs: 300,
        dropTargetStyle: {},
    }}
    on:consider={handleDndConsider}
    on:finalize={handleDndFinalize}
>
    {#each $currentPlaylist as item, i (item.id)}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
            class="card flex flex-ac hover"
            on:click={() => playSongFromCurrentPlaylist(i)}
            animate:flip={{ duration: 300 }}
        >
            <div class="img_container">
                {#if i === $index && $paused === false}
                    <PlayIndicator/>
                {:else if i === $index && $paused === true}
                    <PauseIndicator/>
                {/if}
                <img
                    src={item.image}
                    alt={item.title}
                    style={i === $index ? "filter: brightness(50%);" : ""}
                />
            </div>

            <div class="info flex flex-dirc">
                <div class="title">{@html item.title}</div>
                <div class="subtitle">{@html item.subtitle}</div>
            </div>

            <button
                aria-label="drag-handle"
                on:mousedown={startDrag}
                on:touchstart={startDrag}
                class="empty"
                style={dragDisabled ? "cursor: grab" : "cursor: grabbing"}
            >
                <DragHandle/>
            </button>
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
    :global(.img_container svg) {
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
        user-select: none;
    }
    div.card {
        gap: 0.5rem;
        cursor: pointer;
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
</style>
