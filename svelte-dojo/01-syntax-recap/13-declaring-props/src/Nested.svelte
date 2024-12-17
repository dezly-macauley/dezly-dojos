<script lang="ts">
    // NOTE: This is how to create a prop (short for property in TypeScript)

    // This syntax means userName is a prop object that is a string
    let { userName }: { userName: string } = $props();
</script>

<p>Welcome to Svelte Dojo {userName}</p>

<!--
    NOTE: Then to use this component in another file you would import it and
    then use it like this:

    <Nested userName={"Dezly Macauley"} />
-->
