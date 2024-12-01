import React, { useState } from "react";

// Liste des pays disponibles
const COUNTRIES = [
    { id: "france", label: "France", flag: "/img/flags/FRA.png" },
    { id: "spain", label: "Espagne", flag: "/img/flags/ESP.png" },
    { id: "germany", label: "Allemagne", flag: "/img/flags/DEU.png" },
    { id: "italy", label: "Italie", flag: "/img/flags/ITA.png" },
    { id: "united-kingdom", label: "Royaume-Uni", flag: "/img/flags/GBR.png" },
];

const FilterCountry = () => {
    const [selectedCountries, setSelectedCountries] = useState([]); // Pays sélectionnés
    const [input, setInput] = useState(""); // Texte de l'input
    const [suggestions, setSuggestions] = useState([]); // Suggestions filtrées
    const [isOpen, setIsOpen] = useState(false); // État pour afficher ou masquer le contenu

    // Fonction pour mettre à jour les suggestions en fonction de l'input
    const handleInputChange = (e) => {
        const value = e.target.value.toLowerCase();
        setInput(value);
        if (value) {
            setSuggestions(
                COUNTRIES.filter(
                    (country) =>
                        country.label.toLowerCase().includes(value) &&
                        !selectedCountries.some((selected) => selected.id === country.id)
                )
            );
        } else {
            setSuggestions([]);
        }
    };

    // Fonction pour ajouter un pays
    const addCountry = (country) => {
        if (!country) return;
        setSelectedCountries([...selectedCountries, country]);
        setInput(""); // Réinitialiser l'input
        setSuggestions([]); // Effacer les suggestions
    };

    // Fonction pour supprimer un pays
    const removeCountry = (countryId) => {
        setSelectedCountries(selectedCountries.filter((country) => country.id !== countryId));
    };

    return (
        <div className="border-b pr-5 pl-5 pt-2 pb-3">
            <div>
                {/* Bouton Pays dans un div global */}
                <div onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between cursor-pointer">
                    {/* Partie gauche : "Pays" et le compteur */}
                    <div className="flex items-center gap-2">
                        <span className="font-montserrat font-bold">Pays</span>
                        {selectedCountries.length > 0 && (
                            <span className="bg-indigo-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                                {selectedCountries.length}
                            </span>
                        )}
                    </div>
                    {/* Triangle haut/bas complètement à droite */}
                    <span>{isOpen ? "▲" : "▼"}</span>
                </div>

                {/* Contenu du filtre */}
                {isOpen && (
                    <div>
                        {/* Barre de recherche avec auto-complétion */}
                        <div className="relative w-full mt-4">
                            <input
                                type="text"
                                value={input}
                                onChange={handleInputChange}
                                placeholder="Ajouter un pays..."
                                className="w-full border border-gray-300 rounded-md shadow-sm px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            {/* Liste des suggestions */}
                            {suggestions.length > 0 && (
                                <ul className="absolute z-10 bg-white border border-gray-300 rounded-md shadow-lg w-full mt-1 max-h-40 overflow-y-auto">
                                    {suggestions.map((country) => (
                                        <li
                                            key={country.id}
                                            onClick={() => addCountry(country)}
                                            className="flex items-center gap-2 p-2 cursor-pointer hover:bg-indigo-100"
                                        >
                                            <img src={country.flag} alt={country.label} className="w-6 h-6" />
                                            <span className="text-sm font-montserrat">{country.label}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Liste des pays sélectionnés */}
                        <div>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {selectedCountries.map((country) => (
                                    <div
                                        key={country.id}
                                        className="flex items-center space-x-2 px-1 bg-gray-100 border border-gray-300 rounded-md"
                                    >
                                        <img src={country.flag} alt={country.label} className="h-6" />
                                        <span className="font-montserrat">{country.label}</span>
                                        <button
                                            onClick={() => removeCountry(country.id)}
                                            className="text-red-500 font-bold text-lg"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FilterCountry;
