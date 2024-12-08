import React from "react";
import FilterLanguage from "./FilterLanguage";
import FilterDuration from "./FilterDuration";
import FilterCountry from "./FilterCountry";
import FilterRelease from "./FilterRelease";
import FilterDescription from "./FilterDescription";

const Filter = ({ onApplyFilters }) => {
    return (
        <div className="w-1/4 bg-white shadow-lg ">
            <h2 className="ml-4 pt-5 text-3xl font-bold mb-4">Filtres</h2>
            {/* Composant pour le filtre des langues */}
            <FilterLanguage />
            <FilterDuration />
            <FilterCountry />
            <FilterRelease />
            <FilterDescription />
            <button
                className="w-full bg-indigo-500 text-white py-2 rounded-md mt-4"
                onClick={onApplyFilters}
            >
                Appliquer
            </button>
        </div>
    );
};

export default Filter;
