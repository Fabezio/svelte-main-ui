<script>
  import Head from "$lib/Head.svelte"
  import OneEntryInput from "$lib/OneEntryInput.svelte"
  import Dataset from "$lib/Dataset.svelte"
  import Bar from "$lib/Bar.svelte"
  import Button from "$lib/Button.svelte"
  import Container from "$lib/Container.svelte"
  const arr = new Array(10).fill(0).map((_, i) => i)
let  entry = ""
</script>
<Head website="svelteMainUI tuto" page="Accueil" />
<Dataset dataSet={arr} />
<!-- <h1>Welcome to SvelteKit</h1> -->
<Bar bg="green" light >
  <h2>
  hey, my friends!
  
  </h2>
</Bar>
<Container>
  <OneEntryInput placeholder="entrez votre nom" entryType="file"  label="username" bind:value={entry} />
  <div>{entry}</div>
</Container>

<Bar bg="goldenrod" >
  <h3>wanna see a cool bar? </h3>
  <Button bg="white">bar button</Button>
</Bar>
<Container >
  <Button bg="lime" >Click</Button>
  
</Container>
<Container wide >

  <Button on:click={()=> alert("Oh, it's so good!")} bg={"blue"} txt="silver" >Click</Button>
</Container>
<!-- <br> -->
<Button bg="blue" light wide >Click</Button>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
