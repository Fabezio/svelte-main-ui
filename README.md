# svelte-main-ui

basic scss component collection
**every one** is hackable: size, color, background, functions; and so easy to use 😆
let's have a look

## But first of all

follow this step: into *__layout.svelte$ type this code

> import **Styles** from *'$lib/style/Styles.svelte'*

### *N.B.*

Space before closing chevron is not required, but it makes the code mode readable

___

## Container

this one is web responsive, *ie* it adapts with device
simply import this compo where you need to use it; if you need it full width, type:

> \<Container wide\>

That's all

___

## Bar

Like **Container**, the **Bar** container is web responsive and you may choose to render it in full width
More, you can choose backgroud and text inks; just type the ones you need :
> \<Bar txt="your color" bg="your color"  \>

Note that text ink adapts with background color

### *N.B*

> if *bg* is empty, the bar will be transparent
>
> No *wide* class here

Of course you may nest it with plenty of other compos!

___

## Button

Uses the same *bg* and *txt* properties, including *wide*

Usable functions *on:click*

> \<Button on:click={your function} \>

___
