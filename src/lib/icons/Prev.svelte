<script>
    import { currentTime, currentPlaylist, index } from "$lib/store";

    function back() {
        if ($currentTime < 10) {
            $currentTime = 0;
        } else {
            if ($index !== 0) {
                $index--;
            } else {
                $index = $currentPlaylist.length - 1;
            }
        }
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<svg
class="glow"
on:click={back} 
width="32" height="32" viewBox="0 0 8.4667 8.4667" xmlns="http://www.w3.org/2000/svg"><path d="m3.8145 0.86709c0.39247-0.3111 0.97049-0.031662 0.97049 0.46831v1.6825l2.7115-2.1505c0.3921-0.31073 0.97012-0.031295 0.97012 0.46904v5.7946c0 0.50034-0.57802 0.77941-0.96975 0.46868l-2.7119-2.1501v1.6807c0 0.50034-0.57802 0.77978-0.96975 0.46868l-3.548-2.8128a0.70578 0.70578 0 0 1 0-1.106l3.5477-2.8132z" fill="currentColor" stroke-width=".36817"/></svg>

