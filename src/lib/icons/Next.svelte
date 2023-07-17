<script>
    import { active, currentPlaylist, index } from "$lib/store";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<svg
    class="glow"
    on:click={() => {
        if ($index !== $currentPlaylist.length - 1) {
            $index++;
        } else {
            $index = 0;
        }
    }}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 512 512"
    ><path
        fill="currentColor"
        d="M368.53 64v163.52L96 64v384l272.53-163.52V448H416V64h-47.47z"
    /></svg
>
