import MovieCard from "../components/MovieCard"
import { useState } from "react";
import '../css/Home.css';
function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const movies=[
        {id: 1, title: "Dhurandhar", release_date: "2025", url: "https://m.media-amazon.com/images/M/MV5BMzFiNTVkZjYtM2I3Yi00MGNjLWEyYTAtMGViNGExZmMzMGMzXkEyXkFqcGc@._V1_QL75_UY562_CR35,0,380,562_.jpg" height="500vh"},
        {id: 2, title: "Thama", release_date: "2025", url: "https://m.media-amazon.com/images/M/MV5BNzg5MzVhYjYtOTRiZC00OWFjLThjODQtYTYwMmE0YzZiNGU5XkEyXkFqcGc@._V1_QL75_UY422_CR26,0,285,422_.jpg" height="500vh"},
        {id: 3, title: "Kalki", release_date: "2024", url: "https://m.media-amazon.com/images/M/MV5BMTM3ZGUwYTEtZTI5NS00ZmMyLTk2YmQtMWU4YjlhZTI3NjRjXkEyXkFqcGc@._V1_QL75_UX285_CR0,12,285,422_.jpg" height="500vh"},
        {id: 4, title: "Rmayana", release_date: "2026", url: "https://m.media-amazon.com/images/M/MV5BMzljMTFkYTktMjQ0MC00NjFhLWFmOTEtOTMyZmVhNTBmYTMzXkEyXkFqcGc@._V1_QL75_UY281_CR18,0,190,281_.jpg" height="500vh"},
        {id: 5, title: "King", release_date: "2025", url: "https://m.media-amazon.com/images/M/MV5BNDI0NDI1ZGUtNDI4MS00OWQxLWE0ZDgtYTViYmIwODdmZTdiXkEyXkFqcGc@._V1_QL75_UY281_CR12,0,190,281_.jpg" height="500vh"},
        {id: 6, title: "Bhooth Bangla", release_date: "2024", url: "https://m.media-amazon.com/images/M/MV5BN2Y3NjRhYmMtNWVjMy00ZmE1LWJkNGYtNDY3Y2I3NjkzOGE0XkEyXkFqcGc@._V1_QL75_UY281_CR18,0,190,281_.jpg" height="500vh"},
        {id: 7, title: "Dhurandhar The Revenge", release_date: "2025", url: "https://m.media-amazon.com/images/M/MV5BNzdkNjAxNWMtNWY3My00NTI1LTg2YWQtOGI3MDA0NzdhMjEyXkEyXkFqcGc@._V1_QL75_UY422_CR18,0,285,422_.jpg" height="500vh"},
        {id: 8, title: "Border 2", release_date: "2025", url: "https://m.media-amazon.com/images/M/MV5BYjdhNmE4MTItYjZlYi00MjQ2LTliOGMtN2ViMzU0M2M3ODMyXkEyXkFqcGc@._V1_QL75_UY281_CR12,0,190,281_.jpg" height="500vh"},
        {id: 9, title: "Drishyam 3", release_date: "2024", url: "https://m.media-amazon.com/images/M/MV5BZmYwOWEyZTEtNmQ0ZC00MTlhLTg5M2YtMGY4MzRlZTQ5ZGJkXkEyXkFqcGc@._V1_QL75_UX285_CR0,43,285,422_.jpg" height="500vh"},
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
