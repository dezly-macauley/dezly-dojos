// NOTE: Import the custom component
// Remember to add the word `export` in front of the function name
// This is what allows you to use a named import when you need to use this 
// component in another file

type Movie = {
    title: string;
    release_date: string;
    // url: string;
}

export function MovieCard({ movie }: { movie: Movie } ) {

    function onFavoriteClick() {
        alert("clicked")
    } 

    return(

        // NOTE: In TSX you use "className" because "class" is a reserved word
        // in JavaScript.
        <div className="movie-card">

            <div className="movie-poster">
                {/* <img src={movie.url} alt={movie.title}/> */}

                <div className="movie-overlay">
                    <button 
                        className="favorite-btn" 
                        onClick={onFavoriteClick}>  
                        ♥
                    </button>
                </div>

            </div>

            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>

        </div>
    );
}
