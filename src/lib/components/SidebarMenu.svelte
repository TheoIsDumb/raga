<script>
    import { slide } from 'svelte/transition'
    import { goto } from '$app/navigation'
    import { SidebarVisible } from '$lib/store'
    import { buttonsArray } from '$lib/utils'
    import { page } from '$app/stores'
    import { query, accentColor } from '$lib/store'

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
                $SidebarVisible = false
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
            $SidebarVisible = false
        }}>
            {d}
            </button>
    {/each}
</div>
{/each}