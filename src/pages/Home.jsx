import MovieCard from "../components/MovieCard"
import { useState } from "react";
import '../css/Home.css';
function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const movies=[
        {id: 1, title: "Dhurandhar", release_date: "2025", url: "src/assets/Dhurandhar.png"},
        {id: 2, title: "Thama", release_date: "2025", url: "src/assets/Thama.png"},
        {id: 3, title: "Kalki", release_date: "2024", url: "src/assets/Kalki.png"},
        {id: 4, title: "Rmayana", release_date: "2026", url: "src/assets/Dhurandhar.png"},
        {id: 5, title: "King", release_date: "2025", url: "src/assets/Thama.png"},
        {id: 6, title: "Bhooth Bangla", release_date: "2024", url: "src/assets/Kalki.png"},
        {id: 7, title: "Dhurandhar The Revenge", release_date: "2025", url: "src/assets/Dhurandhar.png"},
        {id: 8, title: "Border 2", release_date: "2025", url: "src/assets/Thama.png"},
        {id: 9, title: "Drishyam 3", release_date: "2024", url: "src/assets/Kalki.png"},
    ];

    const handleSearch=(e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");
    };

    return (
    <div className="home">
        <form onSubmit={handleSearch} className="Search-form">
            <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movies-gird">
            {movies.map((movie) => (
                movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    </div>
    );
}

export default Home
