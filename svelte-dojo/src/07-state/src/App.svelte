<script lang="ts">

    // NOTE: How to make a variable reactive in Svelte
    // Wrap the value of the variable with `$state()`

    // `$state()` is called a `rune` in Svelte
    // It is not function. It is part of the Svelte language

	let numberOfClicks: number = $state(0);

	function increment() {
        // increase count by one
        numberOfClicks += 1;
	}
</script>

<button onclick={increment}>
	You have clicked {numberOfClicks}
    {numberOfClicks == 1 ? "time" : "times"}
</button>
