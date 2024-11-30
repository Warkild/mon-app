import React from "react";

const Results = () => {
    // Liste statique de films
    const films = [
        { id: 1, title: "Inception", language: "Anglais", year: 2010 },
        { id: 2, title: "Le Fabuleux Destin d'Amélie Poulain", language: "Français", year: 2001 },
        { id: 3, title: "El Laberinto del Fauno", language: "Espagnol", year: 2006 },
    ];

    return (
        <div className="flex-1 p-6">
            <h1 className="text-2xl font-bold mb-6">Résultats</h1>
            <div className="grid grid-cols-2 gap-4">
                {films.map((film) => (
                    <div key={film.id} className="p-4 bg-white shadow rounded-md">
                        <h2 className="text-lg font-bold">{film.title}</h2>
                        <p className="text-sm text-gray-500">Langue : {film.language}</p>
                        <p className="text-sm text-gray-500">Année : {film.year}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Results;
