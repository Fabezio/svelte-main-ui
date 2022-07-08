# svelte-main-ui

basic scss component collection

**Each one** is customizable : size, color, background, functions; and so easy to use 😀

Let's have a look

## But first of all

### \<Styles \/\> and \<Head \/\>

Follow this step: into *__layout.svelte$ type this code

> import **Styles** from *'svelte-main-ui/style/Styles.svelte'*
>
> import *{ website }* from *'svelte-main-ui/store/webIdent'*
>
> $website = "..."

Then place the Style component underneath *\<\script\>* markup.

### *Important*

> Be sure you close *Styles* component, for it's an orphan one, otherwise styles won't appear or render might interrupt.

### \<Head \/\> property

> \<Head title="..." \/\>

### *N.B.*

Space before closing chevron is not required, but it makes the code mode readable

___

## Container

This one is web responsive, *ie* it adapts with device

Simply import this compo where you need to use it; if you need it full width, type:

> \<Container wide \>

That's all

___

## Bar

Like **Container**, the **Bar** container is web responsive and you may choose to render it in full width

More, you can choose backgroud and text inks; just type the ones you need :

> \<Bar txt="..." bg="..."  \>

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

> \<Button on:click=\{... or ()=> ...} \>

___

## Forms

### OneEntryInput

It's, like named, a compo using one single entry each

On mobile devices, \<label\> will not appear; a placeholder will invite you to prompt inside \<input\> field and vice versa

***Properties***

- label
- value
- entryType (for type)

***entryType attribute***
those attributes are

- text (default)
- number
- password
- email
- tel
- url
- file (in this case, you can enter *multiple* option this way:

> \<Input placeholder="..." bind:value="..." entryType="file" multiple  \/\>
