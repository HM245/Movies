import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "../services/api";
import '../css/Home.css';
function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error,setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies)
            } catch (err) {
                copnsole.log(err);
                setError("Error fetching movies");
            }
            finally {
                setLoading(false);
            }
        }

        fetchMovies()
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if(!searchQuery.trim()) return
        if(loading) return
        setLoading(true);
        
        try {
                const searchResults = await searchMovies(searchQuery);
                setMovies(searchResults)
                setError(null);
            } catch (err) {
                copnsole.log(err);
                setError("Error fetching movies");
            }
            finally {
                setLoading(false);
            }

        // setSearchQuery("");
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="Search-form">
                <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}

        {loading ? (
            <div className="loading">Loading...</div>
        ) : (
          <div className="movies-gird">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.imdbID} />
                ))}
            </div>
        )}
        </div>
    );
}

export default Home
