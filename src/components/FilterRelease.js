import React, { useState } from "react";
import { Range } from "react-range";

const FilterRelease = () => {
    const [startDate, setStartDate] = useState(2000); // Année de début
    const [endDate, setEndDate] = useState(2016); // Année de fin
    const [values, setValues] = useState([startDate, endDate]); // Valeurs pour le slider
    const [isOpen, setIsOpen] = useState(false); // État pour afficher ou masquer le contenu

    // Mise à jour des valeurs du slider
    const handleSliderChange = (newValues) => {
        setValues(newValues);
        setStartDate(newValues[0]);
        setEndDate(newValues[1]);
    };

    return (
        <div className="border-b pr-5 pl-5 pt-2 pb-3">
            <div>
                {/* Bouton Dates */}
                <div onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-2">
                        <span className="font-montserrat font-bold">Dates</span>
                        <span className="bg-blue-600 text-white rounded-full h-6 px-2 flex items-center justify-center text-xs">
              {values[0]}-{values[1]}
            </span>
                    </div>
                    {/* Triangle haut/bas */}
                    <span>{isOpen ? "▲" : "▼"}</span>
                </div>

                {/* Contenu du filtre */}
                {isOpen && (
                    <div className="mt-4">
                        {/* Inputs pour début et fin */}
                        <div className="flex items-center gap-4">
                            <div className="flex-1">
                                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                                    Date de début
                                </label>
                                <input
                                    id="startDate"
                                    type="number"
                                    value={startDate}
                                    onChange={(e) => {
                                        const newStartDate = Math.min(Number(e.target.value), endDate - 1);
                                        setStartDate(newStartDate);
                                        setValues([newStartDate, endDate]);
                                    }}
                                    className="w-full border border-gray-300 rounded-md shadow-sm px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                                    Date de fin
                                </label>
                                <input
                                    id="endDate"
                                    type="number"
                                    value={endDate}
                                    onChange={(e) => {
                                        const newEndDate = Math.max(Number(e.target.value), startDate + 1);
                                        setEndDate(newEndDate);
                                        setValues([startDate, newEndDate]);
                                    }}
                                    className="w-full border border-gray-300 rounded-md shadow-sm px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                        </div>

                        {/* Slider double */}
                        <div className="mt-6">
                            <Range
                                step={1}
                                min={1888} // Année minimale
                                max={2016} // Année maximale
                                values={values}
                                onChange={handleSliderChange}
                                renderTrack={({ props, children }) => (
                                    <div
                                        {...props}
                                        className="h-2 bg-gray-300 rounded-full"
                                        style={{
                                            ...props.style,
                                            position: "relative",
                                            width: "100%",
                                        }}
                                    >
                                        <div
                                            className="h-2 bg-indigo-500 rounded-full"
                                            style={{
                                                position: "absolute",
                                                left: `${((values[0] - 1888) / (2016 - 1888)) * 100}%`,
                                                right: `${100 - ((values[1] - 1888) / (2016 - 1888)) * 100}%`,
                                            }}
                                        />
                                        {children}
                                    </div>
                                )}
                                renderThumb={({ props }) => (
                                    <div
                                        {...props}
                                        className="h-5 w-5 bg-indigo-500 rounded-full shadow-md"
                                        style={{
                                            ...props.style,
                                        }}
                                    />
                                )}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FilterRelease;
