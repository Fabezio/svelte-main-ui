<script>
  import {website} from "$lib/store/webIdent.js";
  import Styles from "$lib/styles/Styles.svelte";
  // import "$lib/main.scss"
  $website = "Svelte Main UI"
  import {page} from "$app/stores"
  console.log($page.url.pathname)
</script>
<Styles />
<slot />
<pre >
  {$page.url.pathname}
</pre>