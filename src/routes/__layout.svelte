<script>
  import Styles from "$lib/styles/Styles.svelte";
  // import "$lib/main.scss"
  import {page} from "$app/stores"
  console.log($page.url.pathname)
</script>
<Styles />
<slot />
<pre >
  {$page.url.pathname}
</pre>