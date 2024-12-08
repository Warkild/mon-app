import React, { useState } from "react";
import { Range } from "react-range";

const FilterDuration = ({ onDurationChange }) => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(120);
    const [values, setValues] = useState([min, max]);
    const [isOpen, setIsOpen] = useState(false);

    const handleSliderChange = (newValues) => {
        setValues(newValues);
        setMin(newValues[0]);
        setMax(newValues[1]);
        onDurationChange(newValues[0], newValues[1]); // Remonte les valeurs au parent
    };

    return (
        <div className="border-b pr-5 pl-5 pt-2 pb-3">
            <div>
                {/* Bouton Durée */}
                <div onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-2">
                        <span className="font-montserrat font-bold">Durée</span>
                        <span className="bg-blue-600 text-white rounded-full h-6 px-2 flex items-center justify-center text-xs">
              {values[0]}-{values[1]} min
            </span>
                    </div>
                    {/* Triangle haut/bas */}
                    <span>{isOpen ? "▲" : "▼"}</span>
                </div>

                {/* Contenu du filtre */}
                {isOpen && (
                    <div className="mt-4">
                        {/* Inputs pour min et max */}
                        <div className="flex items-center gap-4">
                            <div className="flex-1">
                                <label htmlFor="min" className="block text-sm font-medium text-gray-700">
                                    Temps min (min)
                                </label>
                                <input
                                    id="min"
                                    type="number"
                                    value={min}
                                    onChange={(e) => {
                                        const newMin = Math.min(Number(e.target.value), max - 1);
                                        setMin(newMin);
                                        setValues([newMin, max]);
                                    }}
                                    className="w-full border border-gray-300 rounded-md shadow-sm px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="max" className="block text-sm font-medium text-gray-700">
                                    Temps max (min)
                                </label>
                                <input
                                    id="max"
                                    type="number"
                                    value={max}
                                    onChange={(e) => {
                                        const newMax = Math.max(Number(e.target.value), min + 1);
                                        setMax(newMax);
                                        setValues([min, newMax]);
                                    }}
                                    className="w-full border border-gray-300 rounded-md shadow-sm px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                        </div>

                        {/* Slider double */}
                        <div className="mt-6">
                            <Range
                                step={1}
                                min={0}
                                max={300} // Ajuster la durée maximum si nécessaire
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
                                                left: `${((values[0] / 300) * 100).toFixed(2)}%`,
                                                right: `${100 - ((values[1] / 300) * 100).toFixed(2)}%`,
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

export default FilterDuration;
