<script>
    import { slide } from 'svelte/transition'
    import { page } from '$app/stores'
    import { get } from 'svelte/store'
    import { query, accentColor } from '$lib/store'

    $: pathname = $page.url.pathname

    export let btns = ["Songs", "Albums", "Artists", "Playlists"]

    let items = [
        {
            id: "EXPLORE",
            pages: ["New Releases", "Top Charts"]
        },
        {
            id: "BROWSE",
            pages: ["History"]
        },
        {
            id: "MORE",
            pages: ["Settings"]
        }
    ]
</script>

{#if $query !== ""}
    <div transition:slide class="flex flex-col items-start gap">
        <span class="text-{$accentColor} font-bold tracking-wider">SEARCH FOR</span>
        {#each btns as btn}
            <a href={"/search/" + btn.toLowerCase() + '?q=' + $query}
                class="{pathname.includes(btn.toLowerCase()) ? `text-${$accentColor}` : '' }">
            {btn}
        </a>
        {/each}
    </div>
{/if}

{#each items as i}
    <div class="flex flex-col items-start gap">
        <span class="text-{$accentColor} font-bold tracking-wider">{i.id}</span>

        {#each i.pages as d}
            <a class={pathname.includes(d.toLowerCase().replace(' ', '')) ? `text-${$accentColor}` : ''}
            href={"/" + d.toLowerCase().replace(' ', '')}>
                {d}
            </a>
        {/each}
    </div>
{/each}