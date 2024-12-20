import React, { useState } from "react";

// Liste des langues disponibles
const LANGUAGES = [
    { id: "english", label: "Anglais", flag: "/img/flags/GBR.png" },
    { id: "french", label: "Français", flag: "/img/flags/FRA.png" },
    { id: "spanish", label: "Espagnol", flag: "/img/flags/ESP.png" },
    { id: "german", label: "Allemand", flag: "/img/flags/DEU.png" },
    { id: "italian", label: "Italien", flag: "/img/flags/ITA.png" },
];

const FilterLanguage = () => {
    const [selectedLanguages, setSelectedLanguages] = useState([]); // Langues sélectionnées
    const [input, setInput] = useState(""); // Texte de l'input
    const [suggestions, setSuggestions] = useState([]); // Suggestions filtrées
    const [isOpen, setIsOpen] = useState(false); // État pour afficher ou masquer le contenu

    // Fonction pour mettre à jour les suggestions en fonction de l'input
    const handleInputChange = (e) => {
        const value = e.target.value.toLowerCase();
        setInput(value);
        if (value) {
            setSuggestions(
                LANGUAGES.filter(
                    (lang) =>
                        lang.label.toLowerCase().includes(value) &&
                        !selectedLanguages.some((selected) => selected.id === lang.id)
                )
            );
        } else {
            setSuggestions([]);
        }
    };

    // Fonction pour ajouter une langue
    const addLanguage = (language) => {
        if (!language) return;
        setSelectedLanguages([...selectedLanguages, language]);
        setInput(""); // Réinitialiser l'input
        setSuggestions([]); // Effacer les suggestions
    };

    // Fonction pour gérer la touche Entrée
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && suggestions.length > 0) {
            addLanguage(suggestions[0]);
        }
    };

    // Fonction pour supprimer une langue
    const removeLanguage = (languageId) => {
        setSelectedLanguages(selectedLanguages.filter((lang) => lang.id !== languageId));
    };

    return (
        <div className={"border-t border-b pr-5 pl-5 pt-2 pb-3"}>
            <div>
                {/* Bouton Language dans un div global */}
                <div onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between cursor-pointer">
                    {/* Partie gauche : "Langues" et le chiffre */}
                    <div className="flex items-center gap-2">
                        <span className={"font-montserrat font-bold"}>Langues</span>
                        {selectedLanguages.length > 0 && (
                            <span className="bg-indigo-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
        {selectedLanguages.length}
      </span>
                        )}
                    </div>
                    {/* Triangle haut/bas complètement à droite */}
                    <span>
    {isOpen ? "▲" : "▼"}
  </span>
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
                                onKeyDown={handleKeyDown}
                                placeholder="Ajouter une langue..."
                                className="w-full border border-gray-300 rounded-md shadow-sm px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            {/* Liste des suggestions */}
                            {suggestions.length > 0 && (
                                <ul className="absolute z-10 bg-white border border-gray-300 rounded-md shadow-lg w-full mt-1 max-h-40 overflow-y-auto">
                                    {suggestions.map((language) => (
                                        <li
                                            key={language.id}
                                            onClick={() => addLanguage(language)}
                                            className="flex items-center gap-2 p-2 cursor-pointer hover:bg-indigo-100"
                                        >
                                            <img src={language.flag} alt={language.label} className="w-6 h-6" />
                                            <span className="text-sm font-montserrat">{language.label}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>


                        {/* Liste des langues sélectionnées */}
                        <div>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {selectedLanguages.map((language) => (
                                    <div
                                        key={language.id}
                                        className="flex items-center space-x-2 px-1 bg-gray-100 border border-gray-300 rounded-md"
                                    >
                                        <img src={language.flag} alt={language.label} className="h-6" />
                                        <span className="font-montserrat">{language.label}</span>
                                        <button
                                            onClick={() => removeLanguage(language.id)}
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

export default FilterLanguage;
