<script>
    import { slide } from 'svelte/transition'
    import { goto } from '$app/navigation'
    import { SidebarVisible } from '$lib/store'
    import { buttonsArray } from '$lib/utils'
    import { page } from '$app/stores'
    import { query, accentColor } from '$lib/store'

    import { onMount } from 'svelte'

    let hide
    onMount(() => {
        hide = () => {
            if (window.innerWidth < 1280) {
                $SidebarVisible = !$SidebarVisible
            }
        }
    })

    $: pathname = $page.url.pathname

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
                hide()
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
            hide()
        }}>
            {d}
            </button>
    {/each}
</div>
{/each}