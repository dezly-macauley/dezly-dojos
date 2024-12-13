# UV Guide
_______________________________________________________________________________
## How to create a new Python project using uv

```
mkdir name-of-project
cd name-of-project
uv init
```
_______________________________________________________________________________
## How to run a Python file with uv using a specific python version

```
uv run python3.12 name_of_file.py
```

If you don't care about running the file with a specific version
of Python, you can also just use:
```
uv run name_of_file.py
```
_______________________________________________________________________________
## How to check what version of Python you have in your uv environment

This is the version of Python in your project
```
uv run python --version
```

This is the version of Python in your project

_______________________________________________________________________________
