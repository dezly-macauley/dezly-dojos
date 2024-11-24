### Create a php project

```
mkdir vanilla-php
cd vanilla-php
```

You should see a menu like this:
```

dezly-training-labs/php/vanilla-php on  main [?]
❯ composer init


  Welcome to the Composer config generator



This command will guide you through creating your composer.json config.

Package name (<vendor>/<name>) [dezly-macauley/vanilla-php]:
```

Press enter
_______________________________________________________________________________

Description []: A training lab for PHP

Press enter.
_______________________________________________________________________________

Author [dezly-macauley <dezlymacauley@proton.me>, n to skip]:

Press enter. It is getting this info from my gitconfig

_______________________________________________________________________________

Minimum Stability []: stable

Package Type (e.g. library, project, metapackage, composer-plugin) []: project

License []: GPL-3.0

GPL-3.0 means that others are free to use, modify and redistribute
your code, as long as they make it open source as well.

Would you like to define your dependencies (require) interactively [yes]? no
Would you like to define your dev dependencies (require-dev) interactively [yes]? no

_______________________________________________________________________________

Would you like to define your dev dependencies (require-dev) interactively [yes]? no
Add PSR-4 autoload mapping? Maps namespace "DezlyMacauley\VanillaPhp" to the entered relative path. [src/, n to skip]:

Press enter

_______________________________________________________________________________

{
    "name": "dezly-macauley/vanilla-php",
    "description": "A training lab for PHP",
    "type": "project",
    "license": "GPL-3.0",
    "autoload": {
        "psr-4": {
            "DezlyMacauley\\VanillaPhp\\": "src/"
        }
    },
    "authors": [
        {
            "name": "dezly-macauley",
            "email": "dezlymacauley@proton.me"
        }
    ],
    "minimum-stability": "stable",
    "require": {}
}

Press enter

Your directory should look like this now:
```
.
├── composer.json
└── src
```
_______________________________________________________________________________

Do you confirm generation [yes]?

### Step 1 Create the directory for the module

The naming convention is lower case with words seperated by spaces

Do not use hyphens!!!

`simple_functions` is the module I will be making

```
mkdir simple_functions
```
_______________________________________________________________________________

### Create this directory structure

```c
.
├── composer.json
├── simple_functions
│   ├── math_functions.php
│   └── message_functions.php
└── src
    └── 02_using_modules
        └── main.php
```
_______________________________________________________________________________

### Add the following code to the relevant files


simple_functions/math_functions.php
```php
<?php

function add_two_numbers($num1, $num2) {
    return $num1 + $num2;
}

?>

```
_______________________________________________________________________________

simple_functions/message_functions.php
```php

<?php

function show_welcome_message() {
    echo "Welcome to the PHP Training Lab\n";
}

?>

```
_______________________________________________________________________________

```php
<?php

// Include the function files
require_once '../../simple_functions/math_functions.php';
require_once '../../simple_functions/message_functions.php';

function main() {
    // Call the functions from the modules
    show_welcome_message();  // Prints the welcome message
    $total = add_two_numbers(10, 8);  // Adds two numbers
    echo "The total cost is $total\n";  // Prints the sum of the two numbers
}

main();

?>
```

_______________________________________________________________________________

### To run a program, navigate to the directory and do the following:

```
cd src/02_using_modules
php main.php
```


_______________________________________________________________________________




