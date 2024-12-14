# UV Guide
_______________________________________________________________________________
## How to create a new Python project using uv

```
mkdir name-of-project
cd name-of-project
uv init
```

create a virtual environment.
```
uv venv
```

You will get a messag like this:

Using CPython 3.11.4

Creating virtual environment at: .venv

#### What is a virtual environment
A vitual environment lets you use a specific version of Python and specific
versions of Python packages in isolation.

To activate the virtual environment
```
Activate with: source .venv/bin/activate
```

To deactivate the virtual environment use the following command:
```
deactivate
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

This the version of Python used outside your project (aka system wide)
```
python --version
```

_______________________________________________________________________________
## How to check what versions of Python are available to uv

```
uv python list
```
_______________________________________________________________________________
## How to change the version of Python

```
uv python pin 3.11
```
This will update your `.python-version` file, and create a `.venv` directory
in the root of your project. It will also get rid of the old one

If it doesn't update, you may have a restriction in your `pyproject.toml`
file:

Change the line `requires-python = ">=3.10"` to a range that allows you to 
use the version of Python you want

```toml
[project]
name = "python-dojo"
version = "0.1.0"
description = "Add your description here"
readme = "README.md"
requires-python = ">=3.10"
dependencies = []
```
_______________________________________________________________________________
##

_______________________________________________________________________________
## How to add packages in uv

```
uv add name-of-package
```

_______________________________________________________________________________
## How to install packages that are listed in `pyproject.toml`

```
uv sync
```
_______________________________________________________________________________
