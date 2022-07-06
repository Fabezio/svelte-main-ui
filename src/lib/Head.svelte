<script>
  import {website} from "$lib/store/webIdent.js";
  //  $website =""
  export let title=""
  

</script>
<svelte:head>
  <title>
    {$website} | {title}
  </title>
</svelte:head>
<h1>
  {title}
</h1>

<style>
  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 3em;
  }


</style>