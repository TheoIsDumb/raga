<script>
    import { slide } from 'svelte/transition'
    import { page } from '$app/stores'
    import { query, accentColor } from '$lib/store'

    $: pathname = $page.url.pathname

    import Search from '$lib/icons/sidebar/search/Search.svelte'
    import Songs from '$lib/icons/sidebar/search/Songs.svelte'
    import Albums from '$lib/icons/sidebar/search/Albums.svelte'
    import Artists from '$lib/icons/sidebar/search/Artists.svelte'
    import Playlists from '$lib/icons/sidebar/search/Playlists.svelte'

    import Explore from '$lib/icons/sidebar/Explore.svelte'
    import New from '$lib/icons/sidebar/New.svelte'
    import TopCharts from '$lib/icons/sidebar/TopCharts.svelte'

    import More from '$lib/icons/sidebar/More.svelte'
    import History from '$lib/icons/sidebar/History.svelte'
    import Settings from '$lib/icons/sidebar/Settings.svelte'

    let searchBtns = [
        {id: "Songs", comp: Songs},
        {id: "Albums", comp: Albums},
        {id: "Artists", comp: Artists},
        {id: "Playlists", comp: Playlists},
    ]

    let exploreBtns = [
        {id: "New", link: "newreleases", comp: New},
        {id: "Charts", link: "topcharts", comp: TopCharts},
    ]

    let moreBtns = [
        {id: "History", comp: History},
        {id: "Settings", comp: Settings},
    ]
</script>

<!-- SEARCH -->
{#if $query !== ""}
    <div transition:slide class="min-w-full flex flex-col items-center justify-center border-white border rounded p-1 gap-2">
        <Search/>

        <hr class="bg-white w-5/6" />

        {#each searchBtns as btn}
            <a href={"/search/" + btn.id.toLowerCase() + '?q=' + $query}
                class="{pathname.includes(btn.id.toLowerCase()) ? `text-${$accentColor}` : '' } flex flex-col items-center">
                <svelte:component this={btn.comp}/>
                <span class="text-xs">{btn.id}</span>
            </a>
        {/each}
    </div>
{/if}

<!-- EXPLORE -->
<div class="min-w-full flex flex-col items-center justify-center border-white border rounded p-1 gap-2">
    <Explore/>

    <hr class="bg-white w-5/6" />

    {#each exploreBtns as btn}
        <a href={"/" + btn.link}
            class="{pathname.includes(btn.id.toLowerCase()) ? `text-${$accentColor}` : '' } flex flex-col items-center">
            <svelte:component this={btn.comp}/>
            <span class="text-xs text-center">{btn.id}</span>
        </a>
    {/each}
</div>

<!-- MORE -->
<div class="min-w-full flex flex-col items-center justify-center border-white border rounded p-1 gap-2">
    <More />

    <hr class="bg-white w-5/6" />

    {#each moreBtns as btn}
        <a href={"/" + btn.id.toLowerCase().replace(' ', '')}
            class="{pathname.includes(btn.id.toLowerCase()) ? `text-${$accentColor}` : '' } flex flex-col items-center">
            <svelte:component this={btn.comp}/>
            <span class="text-xs text-center">{btn.id}</span>
        </a>
    {/each}
</div>