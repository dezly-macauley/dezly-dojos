#!/usr/bin/env zsh
#______________________________________________________________________________

# SECTION: A Frontend Setup that uses the following technologies:

# Bun - For speedy package installs and package management. It has TypeScript
# support out of the box

# TypeScript - A superset of JavaScript that has type checks.

# Vite - A build tool that has TypeScript support 
# and a development server out of the box.

# Html - For structuring the webpage.

# Tailwind CSS - For smaller CSS bundles and managing CSS in an
# easier way.

#______________________________________________________________________________

# NOTE: How to run this script
# First make sure that you are in the directory of this file, 
# then run the following commands

# chmod +x bun_vite_ts_tw_setup.sh
# source ./bun_vite_ts_tw_setup.sh

#______________________________________________________________________________

# Intializes the project_name as a variable that contains an empty string
project_name=""

echo "What do you want to name your project:"

# Allows the user to type the name of the project, and then it stores what
# they typed in the terminal as an empty string
read project_name 

# Creates the scaffolding for the project
bun create vite $project_name --template vanilla-ts

# Enters the project directory that was created
cd $project_name

# Uses bun to install all of the project dependencies
bun install

#______________________________________________________________________________

# NOTE: Install Tailwind CSS

# Install Tailwind CSS as a dev dependency
bun add --dev tailwindcss postcss autoprefixer

# Generate a tailwindcss config and a postcss config 
bunx tailwindcss init --postcss

# Add the Tailwind directives to your CSS

# Create an app.css file in the `./src/app.css`
# and add the @tailwind directives for each of Tailwind's layers
# to the file
cat <<EOL > ./src/tailwind.css
@tailwind base;
@tailwind components;
@tailwind utilities;
EOL

#______________________________________________________________________________

# SECTION: Configure the template paths in your tailwind.config.js

# The tailwind.config.js file already exists. 
# Replace all of the contents inside the file with the following. 

cat <<EOL > ./tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOL

#______________________________________________________________________________

# SECTION: Setup your index.html file 

# Overwrite the contents of the index.html file with this 
cat <<EOL > ./index.html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Html + Tailwind CSS</title>
        <link href="./src/tailwind.css" rel="stylesheet">
    </head>
    <body>

        <h1 class="text-5xl font-bold underline">
            Hello world!
        </h1>
    
    </body>
</html>
EOL

#______________________________________________________________________________

echo "Setup Successful"

tree --gitignore

echo "Now create something naughty!  🍑 🫦 💦 🍆"
echo "To run this project, first open another terminal."
echo "Then run this command: bun run dev"

#______________________________________________________________________________
