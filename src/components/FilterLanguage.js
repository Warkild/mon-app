import React, { useState } from "react";

// Liste des langues disponibles
const LANGUAGES = [
    { id: "english", label: "Anglais", flag: "/img/flags/english.png" },
    { id: "french", label: "Français", flag: "/img/flags/french.png" },
    { id: "spanish", label: "Espagnol", flag: "/img/flags/spanish.png" },
    { id: "german", label: "Allemand", flag: "/img/flags/german.png" },
    { id: "italian", label: "Italien", flag: "/img/flags/italian.png" },
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
        <div>
            <div>
                {/* Bouton Language */}
                <button onClick={() => setIsOpen(!isOpen)}>
                    <span>Langues</span>
                    {selectedLanguages.length > 0 && <span> ({selectedLanguages.length})</span>}
                </button>

                {/* Contenu du filtre */}
                {isOpen && (
                    <div>
                        {/* Barre de recherche avec auto-complétion */}
                        <div>
                            <input
                                type="text"
                                value={input}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                placeholder="Ajouter une langue..."
                            />
                            {/* Liste des suggestions */}
                            {suggestions.length > 0 && (
                                <ul>
                                    {suggestions.map((language) => (
                                        <li key={language.id} onClick={() => addLanguage(language)}>
                                            <img src={language.flag} alt={language.label} />
                                            <span>{language.label}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Liste des langues sélectionnées */}
                        <div>
                            <h3>Langues sélectionnées</h3>
                            <div>
                                {selectedLanguages.map((language) => (
                                    <div key={language.id}>
                                        <img src={language.flag} alt={language.label} />
                                        <span>{language.label}</span>
                                        <button onClick={() => removeLanguage(language.id)}>×</button>
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
