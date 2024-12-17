// NOTE: An interface defines the structure of an object
// It defines the properties and methods that an object should have
interface CounterState {
	count: number;
}

// NOTE: How to create a reactive object that is `globally accessible`

// counter is an of the variable type `Counter`
// I am wrapping it in a `$state()` rune to transform counter
// from a regular TypeScript object into a reactive Svelte object.
// when counter.count is updated, any component or code that uses 
// counter.count will be automatically updated.
// This is highly useful for shared state because if multiple components
// need to display counter.state they will all have acess to its latest value
export const counter: CounterState = $state(
    {
        count: 0
    }
);

