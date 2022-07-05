<script>
  
  export let website =""
  export let page=""

</script>
<svelte:head>
  <title>
    {website} | {page}
  </title>
</svelte:head>
<h1>
  {page}
</h1>

<style>
  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 3em;
  }


</style>