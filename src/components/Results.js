import React from "react";

const Results = ({ films }) => {
    return (
        <div className="flex-1 p-6">
            <h1 className="text-2xl font-bold mb-6">Résultats</h1>
            <div className="grid grid-cols-2 gap-4">
                {films.length > 0 ? (
                    films.map((film) => (
                        <div key={film.id} className="p-4 bg-white shadow rounded-md">
                            <h2 className="text-lg font-bold">{film.title}</h2>
                            <p className="text-sm text-gray-500">Langue : {film.language}</p>
                            <p className="text-sm text-gray-500">Année : {film.year}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">Aucun résultat trouvé</p>
                )}
            </div>
        </div>
    );
};

export default Results;
