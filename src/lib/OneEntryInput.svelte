<script lang="ts" >
  export let label = ""
  export let placeholder = ""
  export let value = ""
  // export let error = ""
  export let multiple = false
  export let entryType = "text"
  let style = ""
  style = `${value.length && "valid"}`

</script>
<div>
  <label for={label}>{label.toUpperCase()}</label>
  {#if entryType == "text"}
  <input class={style} bind:value={value} type="text" id={label} name={label} {placeholder}>
  {:else if entryType == "number"}
  <input class={style} bind:value={value} type="number" id={label} name={label} {placeholder}>
  {:else if entryType == "range"}
  <input class={style} bind:value={value} type="range" id={label} name={label} {placeholder}>
  {:else if entryType == "email"}
  <input class={style} bind:value={value} type="email" id={label} name={label} {placeholder}>
  {:else if entryType == "tel"}
  <input class={style} bind:value={value} type="tel" id={label} name={label} {placeholder}>
  {:else if entryType == "password"}
  <input class={style} bind:value={value} type="password" id={label} name={label} {placeholder}>
  {:else if entryType == "url"}
  <input class={style} bind:value={value} type="url" id={label} name={label} {placeholder}>
  {:else if entryType == "date"}
  <input class={style} bind:value={value} type="date" id={label} name={label} {placeholder}>
  {:else if entryType == "time"}
  <input class={style} bind:value={value} type="time" id={label} name={label} {placeholder}>
  {:else if entryType == "file"}
  <input class={style} bind:value={value} type="file" {multiple} id={label} name={label} {placeholder}>
  {/if}
</div>

<style lang="scss" >
//   div {
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: flex-start;
//     margin: 1rem 0;
//   }
//   label {
//     display: none;
//     // display: block;
//     margin-right: 0.5rem;
//   }
// input {
//   appearance: none;
//   border: 2px solid black;
//   padding: 1em;
//   border-radius: 0.5em;

//   &:focus {
//     // outline: none;
//     border-color: #0070f3;
//   }
// }

// .valid {
//   border-color: #00f073;
// }
// .invalid {
//   border-color: #ff0000;
// }
// @media screen and (min-width: 768px) {
  
//   label {
//     display: block;
//   }
//   input::placeholder {
//     // content: none;
//     color: transparent;
//     // margin-bottom: 0.5rem;
//   }
// }
</style>