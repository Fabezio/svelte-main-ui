<script>
  import {page} from "$app/stores"
  console.log($page.url.pathname)
</script>

<slot />
<pre >
  {$page.url.pathname}
</pre>