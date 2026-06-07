import '../css/MovieCard.css'

function MovieCard({movie}) { 
    
    function onFavoriteClick() {
        alert("clicked")
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.Poster} alt={movie.Title}/>
                <button className="favorite-btn" onClick={onFavoriteClick}>
                    ♥
                </button>
        </div>
        <div className="movie-info">
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
        </div>
    </div>
}

export default MovieCard