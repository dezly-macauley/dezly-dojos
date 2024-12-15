// NOTE: Import the CSS
// import './App.css'

// NOTE: Import my React movie card component
import { MovieCard } from './components/MovieCard';

function App() {

    // NOTE: Everything before the return statement is standard TypeScript
    const movieNumber: number = 1;

    return (

        <>

            {/* 
                The reason for two braces is because I am passing in an object
                as a prop
            */}

            {/* 
                NOTE: Conditional rendering:

                This is when you display a component according to some logic
                E.g. 
                If `movieNumber is == 1`` then I want the John Wick movie
                to be displayed. 
                If `movieNumber is something else` 
                then I want the Matrix movie to be displayed.

                The syntax is:
                { condition ? (Do this if its true){}:(Do this if its false) }
                
                E.g.
                { movieNumber == 1 ? ():()}

            */}

            {movieNumber == 1 ?
                (<MovieCard movie={{ title: "John Wick", release_date: "2014" }} />) :
                (<MovieCard movie={{ title: "The Matrix", release_date: "1999" }} />)
            }

        </>

    );

}

export default App;
