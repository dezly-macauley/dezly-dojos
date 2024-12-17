<p>This is a paragraph.</p>

<!--
    You can add style rules to a component using the style tag.
-->

<style>
	/*  
        This is the syntax for making comments in a style tag
        Everything in the style tag is just regular CSS
        
        NOTE: In Svelte, CSS style rules are scoped to the component

    */

    p {
        color: goldenrod;

        /*
            "Times New Roman" and "Times" are part of
            the "serif" family.
            The browser will check if "Times New Roman" is available first.
            "Times" is a fallback, and if that isn't available then "serif" 
            will be used as a last resort.

i           2em means twice the font size of its parent container
        */
        font-family: "Times New Roman", "Times", "serif";
        font-size: 2em;
    }

</style>
