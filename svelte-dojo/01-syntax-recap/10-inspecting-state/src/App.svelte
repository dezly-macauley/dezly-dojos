<!--
    ABOUT: Inspecting State

    If 


-->

<script lang="ts">
	let numbers = $state([1, 2, 3, 4]);

    let total: number = $derived(
        numbers.reduce(

            (accumulator: number, element: number) => {

                return accumulator + element;
            }, 0
        )
    );

	function addNumber() {
		numbers.push(numbers.length + 1);

        // ABOUT: Inspecting State

        /*
            If you try to do this:
		    console.log(numbers);

            open the FireFox browser and use ctrl + Shift + K to open up the
            inspect the page and open up the browser console.
            You will get this warning because the array `numbers` is a 
            reactive proxy.

            [svelte] console_log_state
            Your `console.log` contained `$state` proxies. 
            Consider using `$inspect(...)` or `$state.snapshot(...)` instead

        */

        //_____________________________________________________________________

        // This will result in a warning.
		// console.log(numbers);

        //_____________________________________________________________________

        // NOTE: How to create a non-reactive snapshot of the state
        // It is non-reactive console log because you only get the updated
        // values when you click the button

		// console.log($state.snapshot(numbers));

        // You should see something like this each time 
        // the browser is updated.

        // Array(5) [ 1, 2, 3, 4, 5 ]
        // 0: 1
        // 1: 2
        // 2: 3
        // 3: 4
        // 4: 5
        // length: 5
      
        // If you don't see anything in the browser console after pressing
        // the button then you next to filter output,
        // Make sure you have the following enabled:
        // Errors, Warnings, Logs, Info, Debug and so on...

        //_____________________________________________________________________


	}

    // NOTE: How to create a reactive snapshot of the state 
    // Svelte has a Rune for this called the inspect rune

    // This will automatically log a snapshot 
    // of the state whenever it changes. 
    // This code will automatically be stripped out 
    // of your production build

    //_____________________________________________________________________

    $inspect(numbers);

</script>


<p>{numbers.join(' + ')} = {total}</p>

<button onclick={addNumber}>
	Add a number
</button>
