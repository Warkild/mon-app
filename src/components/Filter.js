import React, {useState} from "react";
import FilterLanguage from "./FilterLanguage";
import FilterDuration from "./FilterDuration";
import FilterCountry from "./FilterCountry";
import FilterRelease from "./FilterRelease";
import FilterDescription from "./FilterDescription";

const Filter = ({ onApplyFilters }) => {

    const [dateRange, setDateRange] = useState([2000, 2016]);
    const [runtimeRange, setRuntimeRange] = useState([0, 120]);

    const handleDateChange = (start, end) => {
        setDateRange([start, end]); // Mets à jour la plage de dates
    };

    const handleDurationChange = (min, max) => {
        setRuntimeRange([min, max]);
    };

    const applyFilters = () => {
        onApplyFilters(dateRange, runtimeRange); // Passe deux arguments séparés
    };


    return (
        <div className="w-1/4 bg-white shadow-lg ">
            <h2 className="ml-4 pt-5 text-3xl font-bold mb-4">Filtres</h2>
            {/* Composant pour le filtre des langues */}
            {/*<FilterLanguage />*/}
            <FilterDuration onDurationChange={handleDurationChange} />
            {/*<FilterCountry />*/}
            <FilterRelease onDateChange={handleDateChange} />
            {/*<FilterDescription />*/}
            <button
                className="w-full bg-indigo-500 text-white py-2 rounded-md mt-4"
                onClick={applyFilters}
            >
                Appliquer
            </button>
        </div>
    );
};

export default Filter;
