<script>
    import { active, currentPlaylist, index } from "$lib/store";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<svg
    class="glow"
    on:click={() => {
        if ($index !== 0) {
            $index--;
        } else {
            $index = $currentPlaylist.length - 1;
        }
    }}
    xmlns="http://www.w3.org/2000/svg"
    width="32" height="32" viewBox="0 0 32 32" ><path fill="currentColor" d="M12.364 4.858C13.43 4.013 15 4.772 15 6.13v4.57l7.365-5.841C23.43 4.015 25 4.774 25 6.133v15.739c0 1.359-1.57 2.117-2.634 1.273L15 17.305v4.565c0 1.359-1.57 2.118-2.634 1.273l-9.637-7.64a1.917 1.917 0 0 1 0-3.004l9.636-7.641Z"/></svg>