<!--
    NOTE: Universal Reactivity
    This is about using runes outside a component
    to share some global state.
-->

<script lang="ts">
    import { counter } from "./shared.svelte.ts";
</script>

<button onclick={() => counter.count += 1}>
	clicks: {counter.count}
</button>
