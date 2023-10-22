<script>
    import { slide } from 'svelte/transition'
    import { goto } from '$app/navigation'
    import { page } from '$app/stores'
    import { get } from 'svelte/store'
    import { query, accentColor } from '$lib/store'

    $: pathname = $page.url.pathname

    export let buttonsArray = [
        { name: "Songs", function: () => goto(`/search/songs?q=${get(query)}`) },
        { name: "Albums", function: () => goto(`/search/albums?q=${get(query)}&index=1`) },
        { name: "Artists", function: () => goto(`/search/artists?q=${get(query)}`) },
        { name: "Playlists", function: () =>  goto(`/search/playlists?q=${get(query)}`) }
    ]

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
        {#each buttonsArray as btn}
            <button
            class="{pathname.includes(btn.name.toLowerCase()) ? `text-${$accentColor}` : '' }"
            on:click={() => {
                if ($query !== "") {
                btn.function()
                }
            }}
            >
            {btn.name}
            </button>
        {/each}
    </div>
{/if}

{#each items as i}
    <div class="flex flex-col items-start gap">
        <span class="text-{$accentColor} font-bold tracking-wider">{i.id}</span>

        {#each i.pages as d}
            <button class={pathname.includes(d.toLowerCase().replace(' ', '')) ? `text-${$accentColor}` : ''}
            on:click={() => {
                goto("/" + d.toLowerCase().replace(' ', ''))
            }}>
                {d}
                </button>
        {/each}
    </div>
{/each}