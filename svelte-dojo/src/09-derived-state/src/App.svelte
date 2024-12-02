<!--
    NOTE: Derived State
    This is when a the state a variable, 
    depends on the state of another variable.
    Svelte handles this using the `$derived` rune
-->

<script lang="ts">

	let numbers: number[] = $state([7, 3, 8]);

    // NOTE: This is derived state in action
    // The `$derived()` rune is used on `total` because its value depends
    // on the values of the state of the array `numbers`.

    let total: number = $derived(
        numbers.reduce(

            (accumulator: number, element: number) => {

                return accumulator + element;
            }, 0
        )
    );

	function addNumber() {
		numbers.push((numbers.length) + 1);
	}
</script>

<p>{numbers.join(' + ')} = {total}</p>

<button onclick={addNumber}>
	Add a number
</button>
