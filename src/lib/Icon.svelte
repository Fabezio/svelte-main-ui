<script>
import SvgIcon from '@jamescoyle/svelte-icon'
import { mdiAccountAlert } from '@mdi/js'
</script>

<SvgIcon type="mdi" path={mdiAccountAlert}></SvgIcon>

<!-- <script>
  import "@mdi/font/scss/materialdesignicons.scss"
  // import "fontawesome-free/scss/fontawesome.scss";
  export let icon = ""
  export let mdi = false
  export let fa = false
  console.log("mdi",mdi)
  console.log("fa",fa)
</script>

{#if mdi}
  <span class="mdi mdi-{icon}"></span>
{:else if fa}
  <i class="fa-solid fa-{icon}"></i>
  {:else}
  <span class="{icon}"></span> 
{/if}
 -->
