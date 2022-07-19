<script>
  import {createEventDispatcher} from "svelte"
  const dispatch = createEventDispatcher()
    export let bg
    export let txt = ""  
  export let light = false
  export let wide = false

  let style = `bg-${bg}`
  $: {

    if (txt != "") style += ` txt-${txt}`
    console.log("Button:")
    console.log(style)
    console.log("- - -")
    } 
</script>

<button class:txt-white={light} class:wide={wide} class={style} on:click={()=> dispatch("click")} >
  <slot />
</button>

<style>
  /* button {
    padding: 12px 1em;
    border-radius: 8px;
    border: none;
    box-shadow: 2px 2px 2px gray;
    font-size: 20px;
    font-weight: 200;
    text-transform: uppercase;
    margin: 4px;
  } */
</style>
