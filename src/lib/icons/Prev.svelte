<script>
    import { active, currentPlaylist, index } from "$lib/store";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<svg
    class="glow"
    on:click={() => {
        $index--;
        $active = $currentPlaylist[$index];
    }}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 512 512"
>
    <path
        fill="currentColor"
        d="M143.47 64v163.52L416 64v384L143.47 284.48V448H96V64h47.47z"
    />
</svg>
