<!--
    NOTE: Effects

    From the Svelte docs:

    "So far we’ve talked about reactivity in terms of state. 
    But that’s only half of the equation — state is only reactive 
    if something is reacting to it, 
    otherwise it’s just a sparkling variable.
    
    The thing that reacts is called an effect. 
    You’ve already encountered effects — the ones that 
    Svelte creates on your behalf to update the 
    DOM in response to state changes — but you can also 
    create your own with the $effect rune.

"

-->

<!--
    NOTE: Most of the time, you shouldn’t. 
    $effect is best thought of as an escape hatch, 
    rather than something to use frequently. 
    If you can put your side effects in an event handler,
    for example, that’s almost always preferable.
-->

<script lang="ts">

    // Keeps track of how much time has passed
	let elapsed: number = $state(0);
    
    // This controls how quickly the the value 
    // of the variable `elapsed` increases.
    // I.e. this is the speed controller
    // Currently it it set to 1000 milliseconds
	let interval: number = $state(1000);

    // NOTE: The $effect() rune
    // This is the syntax:
    // $effect(() => { });

    // Think of the $effect rune as a special function that will automatically
    // run whenever the reactive state inside changes. 

    // It's like telling Svelte, 
    // "Run this function whenever something in the 
    // component changes that we care about."

	// $effect(() => {
	// 	const id = setInterval(() => {
	// 		elapsed += 1;
	// 	}, interval);
	//
	// 	return () => {
	// 		clearInterval(id);
	// 	};
	// });


</script>

<button onclick={() => interval /= 2}>speed up</button>
<button onclick={() => interval *= 2}>slow down</button>

<p>elapsed: {elapsed}</p>

<!--

    NOTE: 
    The cleanup function is called immediately before the 
    effect function re-runs when interval changes, 
    and also when the component is destroyed.

    If the effect function doesn’t read any state 
    when it runs, it will only run once, when the component mounts.

    NOTE: Effects do not run during server-side rendering.

-->
