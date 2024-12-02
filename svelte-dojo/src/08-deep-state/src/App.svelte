<script lang="ts">
    
    // NOTE: Deep Reactivity 

    // There's nothing new to learn here.
    // Deep Reactivity simply means that when you make a variable like 
    // an array reactive, Svelte has the ability detect changes inside the
    // entire array and update the User Interface automatically without having
    // to reassign the entire object or array.

	let numbers: number[] = $state([13, 12, 33, 7]);

	function addNumber() {
        numbers.push(numbers.length + 10)
	}
</script>

<!-- 
    This is just regular JavaScript
    Each element in the array will be displayed and separated by a `+`
-->
<p>{numbers.join(" + ")}</p>

<button onclick={addNumber}>
	Add a number
</button>
