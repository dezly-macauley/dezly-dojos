// NOTE: main.tsx
// This file is the main entry point for the React Application

// This line is importing a tool from React that will check for potential
// issues in your code, and display warnings.
import { StrictMode } from 'react'

// This allows your to user the `createRoot` function in React.
import { createRoot } from 'react-dom/client'

// This imports the main CSS file that makes the user interface look nice.
import './index.css'

// This imports a React component called `App.tsx`
// This is the main component in a file
import App from './App.tsx'

// This function will look for the `index.html` file in either the root of
// the project. `../index.html`, if it is not there then it will look 
// for the file in `../public/index.html`
// When it finds this file, the function will search for the html
// element that has the tag `root`:

// NOTE: index.html
/*
    index.html

    <div id="root"></div>

*/


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
