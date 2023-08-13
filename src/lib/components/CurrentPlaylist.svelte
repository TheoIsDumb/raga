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
    class="playlist scrollable flex flex-col overflow-auto gap-2 select-none"
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
            class="card flex justify-center items-center hover gap-2 cursor-pointer"
            on:click={() => playSongFromCurrentPlaylist(i)}
            animate:flip={{ duration: 300 }}
        >
            <div class="img_container relative h-14 w-14 flex items-center">
                {#if i === $index && $paused === false}
                    <PlayIndicator/>
                {:else if i === $index && $paused === true}
                    <PauseIndicator/>
                {/if}
                <img class="rounded"
                    src={item.image} alt={item.title}
                    style={i === $index ? "filter: brightness(50%);" : ""}
                />
            </div>

            <div class="info flex flex-col w-full truncate">
                <div class="title font-bold truncate">{@html item.title}</div>
                <div class="subtitle opacity-60 text-sm truncate">{@html item.subtitle}</div>
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
    :global(.img_container svg) { transform: translate(-50%, -50%); }
</style>