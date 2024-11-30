import React from "react";
import FilterLanguage from "./FilterLanguage";

const Filter = () => {
    return (
        <div className="w-1/4 bg-white shadow-lg ">
            <h2 className="text-lg font-bold mb-4">Filtres</h2>
            {/* Composant pour le filtre des langues */}
            <FilterLanguage />
            <button
                className="w-full bg-indigo-500 text-white py-2 rounded-md mt-4"
                onClick={() => console.log("Filtres appliqués")}
            >
                Appliquer
            </button>
        </div>
    );
};

export default Filter;
