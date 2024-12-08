import React, { useState } from "react";

const FilterDescription = () => {
    const [descriptions, setDescriptions] = useState([]); // Liste des paragraphes
    const [input, setInput] = useState(""); // Texte de l'input
    const [isOpen, setIsOpen] = useState(false); // État pour afficher ou masquer le contenu

    // Fonction pour ajouter une description
    const addDescription = () => {
        if (!input.trim()) return; // Empêche d'ajouter une description vide
        setDescriptions([...descriptions, input.trim()]);
        setInput(""); // Réinitialiser l'input
    };

    // Fonction pour supprimer une description
    const removeDescription = (index) => {
        setDescriptions(descriptions.filter((_, i) => i !== index));
    };

    return (
        <div className="border-b pr-5 pl-5 pt-2 pb-3">
            <div>
                {/* Bouton "Descriptions" */}
                <div onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between cursor-pointer">
                    {/* Partie gauche : "Descriptions" et le compteur */}
                    <div className="flex items-center gap-2">
                        <span className="font-montserrat font-bold">Descriptions</span>
                        {descriptions.length > 0 && (
                            <span className="bg-indigo-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                                {descriptions.length}
                            </span>
                        )}
                    </div>
                    {/* Triangle haut/bas complètement à droite */}
                    <span>{isOpen ? "▲" : "▼"}</span>
                </div>

                {/* Contenu du filtre */}
                {isOpen && (
                    <div>
                        {/* Zone de texte pour écrire une description */}
                        <div className="relative w-full mt-4">
                            <textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ajouter une description..."
                                className="w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                rows={3}
                            />
                            <button
                                onClick={addDescription}
                                className="mt-2 w-full bg-indigo-600 text-white py-1 rounded-md shadow-sm hover:bg-indigo-700"
                            >
                                Ajouter
                            </button>
                        </div>

                        {/* Liste des descriptions ajoutées */}
                        <div>
                            <div className="flex flex-col gap-2 mt-4">
                                {descriptions.map((description, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start justify-between bg-gray-100 border border-gray-300 rounded-md p-2"
                                    >
                                        <p className="flex-1 text-sm font-montserrat">{description}</p>
                                        <button
                                            onClick={() => removeDescription(index)}
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

export default FilterDescription;
