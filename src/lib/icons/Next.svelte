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
width="32" height="32" viewBox="0 0 8.4667 8.4667" xmlns="http://www.w3.org/2000/svg"><path d="m4.6514 0.86719c-0.3921-0.3111-0.96975-0.031662-0.96975 0.46868v1.6825l-2.7119-2.1508c-0.3921-0.3111-0.96975-0.031662-0.96975 0.46868v5.7946c0 0.50034 0.57802 0.77978 0.96975 0.46868l2.7119-2.1501v1.6807c0 0.50034 0.57802 0.77978 0.96975 0.46868l3.548-2.8128a0.70578 0.70578 0 0 0 0-1.106l-3.5477-2.8132z" fill="currentColor" stroke-width=".36817"/></svg>

