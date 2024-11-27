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


// NOTE: The `createRoot` function

// The `createRoot` function is used to initialize a React application.
// It takes a DOM element as its argument, in this case, the element with 
// the ID `root`. This is where React will "mount" your application, 
// meaning React will take control of that part of the HTML document.

// This function will look for the `index.html` file in either the root of
// the project. `../index.html`, if it is not there then it will look 
// for the file in `../public/index.html`
// When it finds this file, the function will then search for the html
// element that has the tag `root`:

// NOTE: index.html
/*
    index.html

    <div id="root"></div>

*/

// NOTE: The non-null assertion operator `!`

// This is there to tell TypeScript that the value returned by the 
// `createRoot` function will never be null.
// Or in simple terms, you are saying that there is definately an index.html
// file in that has an element with the id of "root".

createRoot(document.getElementById("root")!).render(

    // This is how to enable StrictMode
    <StrictMode>


        {/* Everything inside the StrictMode tags is in TSX 
        format so that is why the style of making comments is different*/}
      
        {/* This is will render the component. In simple terms 
        the React component called App, is a blueprint.
        When React renders it, it is translating that blueprint,
        into plain Html, CSS and JavaScript that the browser
        can understand*/}
        <App />

    </StrictMode>,

)
