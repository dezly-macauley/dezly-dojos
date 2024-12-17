<script lang="ts">
    // NOTE: This is how to create a prop with a default value

    // You have to add the `?` after the defintion to tell TypeScript that
    // the userName prop is optional.
    // I.e. This component can be used without supplying a userName and things
    // Will work.
    let { userName = "Guest User"  }: { userName?: string } = $props();
</script>

<p>Welcome to Svelte Dojo {userName}</p>

<!--
    NOTE: Then to use this component in another file you would import it and
    then use it like this:

    <Nested />

    If no userName is entered the default will be set to "Guest User"
-->
