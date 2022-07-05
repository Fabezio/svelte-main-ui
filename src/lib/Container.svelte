<script >
export let wide = false
let style = "container"
$: if(wide) style="wide"
</script> 

<div  class="{style}">
  <slot>

  </slot>
</div>

<style lang="scss" >
    $sizes: 576px, 768px, 992px, 1200px;
  // $sizes: 576px, 768px, 992px, 1200px, 1400px;
  @each $size in $sizes {
    @media screen and (min-width: $size) {
      .container {
        width: $size;
        margin: 0 auto;
      }
    }

  }
  // .container {

  // }
</style>