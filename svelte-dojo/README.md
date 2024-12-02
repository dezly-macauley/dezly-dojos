# Svelte Dojo

If you have just installed this, run this command:

```
bun install
```
_______________________________________________________________________________

## How to run lessons in Svelte Dojo

To run a lesson, open `./vite.config.ts`

```ts
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
    plugins: [svelte()],
    root: "./src/09-derived-state/",
})
```

The only thing you need to change is change the `root:`to file path
that contains the lesson.

_______________________________________________________________________________

Once you have updated `./vite.config.ts`, 
all you need to do is open a separate terminal and run this command:

```
bun run dev --open
```
This will start the local server
and automatically open it in a new browser tab.

_______________________________________________________________________________
