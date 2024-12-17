<!--
    NOTE: How to import a component into App.svelte
-->

<script lang="ts">
    import Nested from "./Nested.svelte";
</script>

<p>This is a paragraph.</p>
<Nested />

<style>

    p {
        color: goldenrod;
        font-family: "Times New Roman", "Times", "serif";
        font-size: 2em;
    }

</style>
