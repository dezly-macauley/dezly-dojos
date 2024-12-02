import { MovieCard } from "../components/MovieCard";
import { useState } from "react";


export function Home() {

    // NOTE: State Management
    // This is when you want to keep track of some information and you want 
    // a component to re-render (re-display) itself based on what the state
    // is currently set to.
    // E.g. I want to store what the user types in the input field.
    // The syntax is:
    // const [nameOfTheState, a function that will allow you to update the state] = useState("What you want the default value of the state to be");

    const [searchQuery, setSearchQuery] = useState("");

    // An array of movies
    const movies = [
        {id: 1, title: "John Wick", release_date: "2014"},
        {id: 2, title: "The Matrix", release_date: "1999"},
        {id: 3, title: "Chronicle", release_date: "2012"},

    ]

    const handleSearch = (e) => {
        
        // This will stop the form from clearing the text in the input box 
        // when you click the seach button
        e.preventDefault()

        // This will display an alert with the whatever was typed in the 
        // search input.
        alert(searchQuery)

        setSearchQuery("")
    }
    return(
        <div className="home">

        <form onSubmit={handleSearch} className="search-form">
            <input 
                type="text" 
                placeholder="Search for movies..." 
                className="search-input"
                value={searchQuery}
                onChange={
                        (e) => setSearchQuery(e.target.value)
                }
            />
            <button type="submit" className="search-btn">Search</button>
        </form>

            <div className="movies-grid">

               {/* 
                    NOTE: .map()

                    This is a method in TypeScript that can be used on arrays.
                    It goes through each element in the array, performs some
                    type of transformation on each element, and then it 
                    returns a new array that contains the 
                    transformed elements.

                    In this case the array is `movies`. Each element in the
                    array is a an object that represents a movie.

                    Each movie object follows this structure:
                    {id: number, title: string, release_date: string}

                    .map() will then perform a transformation.
                    For each object in the array, .map() will return an 
                    element, specifically a React component.

                    It will return the MovieCard React component, 
                    but it will use the contents of the movie object to fill
                    in the prop.

                    In simple terms, it will display a React component for
                    every movie object in the movies array.
                    
                    NOTE: key={movie.id}
                    You need to add a key property for each component
                    that is returned. This is to let React know which 
                    component to update

                    }

               */}

                {movies.map(
                    (movie) => 
                        (
                            <MovieCard movie={movie} key={movie.id} />
                        )
                )}
            </div>
        
        </div>
    );
}
