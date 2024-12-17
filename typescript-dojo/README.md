This project uses Deno

How to convert an npm install to a Deno install

E.g. the package name is `create-vite`

In npm it is installed like this:

npm create vite@latest

In Deno you would install it like this:

deno run -A npm:name-of-package

The -A is shorthand for allow permissions

```
deno run -A npm:create-vite
```

_______________________________________________________________________________

This is the npm equivalent:

npm install modern-normalize

This is the deno equivalent
```
deno add npm:modern-normalize
```
_______________________________________________________________________________

_______________________________________________________________________________

To run a file:

deno run dev --open

_______________________________________________________________________________
