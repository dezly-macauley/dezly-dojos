<!--
    This is the syntax for making comments in a Svelte file
    `lang=ts` in script tag lets Svelte know that you want to use TypeScript 
    The default language for the script tag in JavaScript
-->

<script lang="ts">
    // Inside of the script tag, you use TypeScript syntax
    // to make comments
    let name: string = "Svelte";
</script>

<!-- How to pass in a variable to an html element -->
<h1>Hello {name}</h1>

<!-- 
    Since the variable name is a string,
    all of the string methods in JavaScript are available to it
-->
<h1>Hello {name.toUpperCase()}</h1>
