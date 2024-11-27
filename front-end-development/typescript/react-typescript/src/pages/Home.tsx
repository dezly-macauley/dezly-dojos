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

               */}

                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        
        </div>
    );
}
