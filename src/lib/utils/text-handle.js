export function textHandle(light, txt) {
  // export let bg
  // export let light = false
  // export let txt = ""
  
  let style
  console.log({light, txt})
  if (light) style += `; color: whitesmoke;`
  else if (txt != "") style += `; color: ${txt};`

  return style
}