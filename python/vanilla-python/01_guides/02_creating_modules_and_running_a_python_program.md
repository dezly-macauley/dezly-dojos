### Step 1 Create the directory for the module

The naming convention is lower case with words seperated by spaces

Do not use hyphens!!!

`simple_functions` is the module I will be making

```
mkdir simple_functions
```
_______________________________________________________________________________

### Create an `__init__.py` file to let Python know that this is a module
```
touch simplefunctions/__init__.py
```

Your directory should look like this now
```
.
└── simple_functions
    └── __init__.py
```

_______________________________________________________________________________

### Add some Python files with code that you want to re-use

simplefunctions/math_functions.py
```python

def add_two_numbers(num1, num2):
    return num1 + num2

```

simplefunctions/message_functions.py
```python

def show_welcome_message():
    print("Welcome to the Python Training Lab")

```

Your directory should look like this now:

```
.
├── simple_functions
│   ├── __init__.py
│   ├── math_functions.py
│   └── message_functions.py
```

_______________________________________________________________________________

### Create a program that can use the module

I have a directory called `src`, and inside it there is a program called

`02_using_modules` wih a `main.py` file

```c
.
├── simple_functions
│   ├── __init__.py
│   ├── math_functions.py
│   └── message_functions.py
└── src
    └── 02_using_modules
        └── main.py
```

Add this to the `main.py` file:

```python
# Importing the functions from the simple_functions module
from simple_functions.math_functions import add_two_numbers
from simple_functions.message_functions import show_welcome_message

def main():
    # Call the functions from the modules
    show_welcome_message()  # Prints the welcome message
    total = add_two_numbers(10, 8)  # Adds two numbers
    print(f"The total cost is {total}")  # Prints the sum of the two numbers

if __name__ == "__main__":
    main()
```

_______________________________________________________________________________

### To run the file:

```
python -m src/02_using_modules/main.py
```

_______________________________________________________________________________
