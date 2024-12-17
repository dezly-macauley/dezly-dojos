<!--
    NOTE: How to insert html contente directly into a component
-->


<script lang="ts">
    let myHtmlContent: string = 
        "Andre Fili once said " + 
        "that he <strong>really</strong> loves big booty latinas";
</script>

<!-- NOTE: 
    If you just add it like this the <strong> tags will be treated as a 
    regular string
-->
<p>{myHtmlContent}</p>

<!---------------------------------------------------------------------------->

<!-- NOTE: 
    If you just add it like this, the word "really" will have the rules
    of the <strong></strong> tags applied to the word
-->
<p>{@html myHtmlContent}</p>

