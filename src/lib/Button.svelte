<script>
  import {createEventDispatcher} from "svelte"
  const dispatch = createEventDispatcher()
    export let bg
  export let light = false
  export let wide = false
  export let txt = ""  

  let style = `background-color: ${bg};`
  $: {
    if (light) style += ` color: whitesmoke;`
    else if (txt != "") style += ` color: ${txt};`
    if (wide) style += ` width: 100%;`
    console.log("Button:")
    console.log(style)
    console.log("- - -")
    }
</script>

<button {style} on:click={()=> dispatch("click")} >
  <slot />
</button>

<style>
  button {
    padding: 12px 1em;
    border-radius: 8px;
    border: none;
    box-shadow: 2px 2px 2px gray;
    font-size: 20px;
    font-weight: 200;
    text-transform: uppercase;
    margin: 4px;
  }
</style>
