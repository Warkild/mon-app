import React, { useState } from "react";
import Filter from "./components/Filter";
import Results from "./components/Results";

function App() {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        try {
            const response = await fetch("/solr/movie_core/select?q=*:*", {
                method: 'GET',
            });
            const data = await response.json();
            const results = data.response.docs.map((doc) => ({
                id: doc.wiki_id,
                title: doc.movie_name,
                language: doc.languages?.[0] || "Non spécifié",
                year: doc.movie_release,
            }));
            setMovies(results);
        } catch (error) {
            console.error("Erreur lors de la récupération des données : ", error);
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar for filters */}
            <Filter onApplyFilters={fetchMovies} />
            {/* Main content for results */}
            <Results films={movies} />
        </div>
    );
}

export default App;
