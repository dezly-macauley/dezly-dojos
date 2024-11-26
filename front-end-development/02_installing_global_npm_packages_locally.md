# How to install global npm packages locally

Run this command:
```
npm set prefix ~/.npm-global
```

Add this to your `.zshrc` file:

```sh
#==============================================================================
# SECTION: Additional Paths

# NOTE: This will allow you to install npm packages locally.
# But first run this command:
# npm set prefix ~/.npm-global

# Now you can use the `npm install -g name_of_package` you want to install.
export PATH=$HOME/.npm-global/bin:$PATH

#==============================================================================
```

You can try it out with `vtsls`. This is a LSP wrapper for typescript 
extension of vscode .

This is also what `LazyVim` uses by default to provide language support for
typescript.

https://www.lazyvim.org/extras/lang/typescript#nvim-lspconfig

```
npm install -g @vtsls/language-server
```

Language servers need to be installed globally so that your Neovim can use
them.

To check that it worked:

```
which vtsls
```
