<!--
    NOTE: Derived State
    This is when a the state a variable, 
    depends on the state of another variable.
    Svelte handles this using the `$derived` rune
-->

<script lang="ts">

	let numbers: number[] = $state([1, 2, 3, 4]);

    // NOTE: This is derived state in action
    let total: number = $derived(
        numbers.reduce(
            (t,n) => t + n, 0
        )
    );

	function addNumber() {
		numbers.push((numbers.length) + 1);
	}
</script>

<p>{numbers.join(' + ')} = ...</p>

<button onclick={addNumber}>
	Add a number
</button>
