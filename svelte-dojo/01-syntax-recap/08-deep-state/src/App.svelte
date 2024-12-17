<script lang="ts">
    
    // NOTE: Deep Reactivity 

    // There's nothing new to learn here.
    // Deep Reactivity simply means that when you make a variable like 
    // an array reactive, Svelte has the ability detect changes inside the
    // entire array and update the User Interface automatically without having
    // to reassign the entire object or array.

	let numbers: number[] = $state([15]);

	function addNumber() {
        numbers.push((numbers.length) * 2);
	}
</script>

<!-- 
    This is just regular JavaScript
    Each element in the array will be displayed and separated by a `,`
-->
<p>
    The list of numbers is:<br>
    {numbers.join(" , ")}
</p>

<button onclick={addNumber}>
	Add a number to the list
</button>
