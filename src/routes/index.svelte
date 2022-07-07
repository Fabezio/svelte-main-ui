<script>
  import Head from "$lib/Head.svelte"
  import OneEntryInput from "$lib/OneEntryInput.svelte"
  import Dataset from "$lib/Dataset.svelte"
  import Bar from "$lib/Bar.svelte"
  import Button from "$lib/Button.svelte"
  import Container from "$lib/Container.svelte"
  // import Icon from "$lib/Icon.svelte"
  const arr = new Array(10).fill(0).map((_, i) => i)
  let entry = ""
</script>
<Head title="Accueil" />
<Dataset dataSet={arr} />
<!-- <h1>Welcome to SvelteKit</h1> -->
<Bar bg="green"  >
  <h2>
flex start
  
  </h2>
</Bar>
<Bar bg="green" justify="end"  >
  <h2>
flex end
  
  </h2>
</Bar>

<Bar bg="green" justify="center"  >
  <h2>
  center
</h2>
</Bar>

<Bar bg="green" justify="evenly"  >
  <h2>space</h2>
  <h2>evenly</h2>
</Bar>
<Bar bg="green" justify="around"  >
  <h2>space</h2>
  <h2>around</h2>
</Bar>
<Bar bg="green" justify="between"  >
  <h2>space</h2>
  <h2>between</h2>
</Bar>
  
<Bar bg="aqua" >
  <!-- <Icon /> -->
  <!-- <Icon fa icon="user" /> -->
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
