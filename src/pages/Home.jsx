import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react";
import { getPopularMovies } from "../services/api";
import '../css/Home.css';
function Home() {
    // const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const fetchMovies = async () => {
            const popularMovies = await getPopularMovies();
            setMovies(popularMovies);
        };
        fetchMovies();
    }, []);

    const handleSearch=(e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");
    };

    return (
    <div className="home">
        <form onSubmit={searchMovies} className="Search-form">
            <input type="text" placeholder="Search for movies..." className="search-input" value={null} onChange={(e) => setSearchQuery(e.target.value)} />
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movies-gird">
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.imdbID}/>
            ))}
        </div>
    </div>
    );
}

export default Home
