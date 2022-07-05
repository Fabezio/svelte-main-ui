<script >
  export let bg
  export let light = false
  export let txt = ""  

  let style = `background-color: ${bg}`
  $: {
    if (light) style += `; color: whitesmoke;`
    else if (txt != "") style += `; color: ${txt};`
    console.log("Bar:")
    console.log(style)
    console.log("- - -")
    }
</script>

<div class="bar" {style} >
  <slot />

</div>

<style lang="scss">
  .bar {
    display: flex;
    flex-wrap: wrap;
    /* flex- */
    /* margin:  */
    padding: 0.5em 1.5em;
    border-radius: 1em;
    margin: 4px auto;
    /* width: 1200px; */
    filter: grayscale(0.7);
    
  }
  $sizes: 576px, 768px, 992px, 1200px;
  // $sizes: 576px, 768px, 992px, 1200px, 1400px;
  @each $size in $sizes {
    @media screen and (min-width: $size) {
      .bar {
        width: $size;
      }
    }

  }
  // @media (min-width: 768px) {
  //   .bar {
  //     width: 768px;
  //   }
  // }
  // @media (min-width: 1400px) {
  //   .bar {
  //     width: 1400px;
  //   }
  // }
  // @media (min-width: 992px) {
  //   .bar {
  //     width: 992px;
  //   }
  // }
  // @media (min-width: 576px) {
  //   .bar {
  //     width: 576px;
  //   }
  // }
  // @media (min-width: 1200px) {
  //   .bar {
  //     width: 1200px;
  //   }
  // }
  // @media (min-width: 1200px) {
  //   .bar {
  //     width: 1200px;
  //   }
  // }
  
  
  .bar:hover {
    /* content: "!!!"; */
    filter: grayscale(0);

  }
</style>
