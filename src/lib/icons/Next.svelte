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
    xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" ><path fill="currentColor" d="M15.636 4.857c-1.065-.845-2.634-.086-2.634 1.273v4.57L5.636 4.858c-1.065-.845-2.634-.086-2.634 1.273V21.87c0 1.359 1.57 2.118 2.634 1.273l7.366-5.84v4.565c0 1.359 1.57 2.118 2.634 1.273l9.637-7.64a1.917 1.917 0 0 0 0-3.004l-9.636-7.641Z"/></svg>
