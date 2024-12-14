# UV and Vyper Setup Guide
_______________________________________________________________________________
### First make sure that you have this directory

```
cd ~/.local/bin
```
_______________________________________________________________________________

If you don't have it then create it:
```
mkdir -p ~./local/bin
```
This is directory is where Python tools will be installed when you 
use `uv tool install command to install things`

These tools are usually things that need to be accessed even outside of your
project. E.g. Like Neovim will need to access `vyper` and the `vyper-lsp`

_______________________________________________________________________________
### Add this directory to your path

Add this to your `.zshrc`
```
export PATH="/home/dezly-macauley/.local/bin:$PATH"
```

Add this to your `.zshrc` to get autocompletion
```
# Enable shell auto completion for uv commands
eval "$(uv generate-shell-completion zsh)"

# Enable shell auto completion for uvx commands
eval "$(uvx --generate-shell-completion zsh)"
```
_______________________________________________________________________________

### Install the Vyper compiler and language server

This will install the executables, vyper, fang, vyper-json
```
uv tool install vyper
```

Install the language server
```
uv tool install vyper-lsp
```
_______________________________________________________________________________
