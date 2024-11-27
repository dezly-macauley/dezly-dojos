import { MovieCard } from "../components/MovieCard";

function Home() {

    // An array of movies
    const movies = [
        {id: 1, title: "John Wick", release_date: "2014"},
        {id: 2, title: "The Matrix", release_date: "1999"},
        {id: 3, title: "Chronicle", release_date: "2012"},

    ]

    return(
        <div className="home">
        
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

               */}

                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        
        </div>
    );
}
