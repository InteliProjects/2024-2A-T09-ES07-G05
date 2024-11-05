import React, { useEffect, useState, useContext } from "react";
import { X, Plus, Trash2 } from "lucide-react";
import { TagContext } from "../Context/TagContext";

export default function ModalLista({ open, onClose }) {
    const { allTags, setAllTags } = useContext(TagContext);
    const [newTag, setNewTag] = useState("");

    // Função para buscar todas as tags
    const fetchAllTags = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/tags");
            const data = await response.json();
            setAllTags(data);
        } catch (error) {
            console.error("Erro ao buscar todas as tags:", error);
        }
    };

    useEffect(() => {
        fetchAllTags();
    }, []);

    // Função para deletar uma tag
    const handleDelete = async (id_tag) => {
        try {
            console.log("Tentando deletar a tag com ID:", id_tag);
            const response = await fetch(`http://127.0.0.1:8000/tags/${id_tag}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Falha ao deletar a tag');
            }

            setAllTags(prevTags => prevTags.filter(tag => tag.id_tag !== id_tag));
        } catch (error) {
            console.error("Erro ao excluir a tag:", error);
        }
    };

    // Função para adicionar uma tag
    const handleAddTag = async () => {
        if (newTag.trim() === "") {
            return;
        }

        try {
            const response = await fetch("http://127.0.0.1:8000/tags/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome: newTag }),
            });

            if (!response.ok) {
                throw new Error('Falha ao adicionar a tag');
            }

            setNewTag("");
            fetchAllTags();
        } catch (error) {
            console.error("Erro ao adicionar a tag:", error);
        }
    };

    return (
        <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? 'visible bg-black/20 dark:bg-black/50' : 'invisible'}`}>
            <div onClick={e => e.stopPropagation()} className={`bg-white rounded-[1.5dvw] shadow-sombra p-[2dvw] w-[40dvw] max-h-[40dvw] transition-all dark:bg-escuro-1 ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}>
                <button onClick={onClose} className="absolute top-[0.5dvw] right-[0.5dvw] px-[1dvw] py-[0.5dvw] rounded-lg text-gray-400 dark:hover:bg-escuro-2 hover:text-gray-600">
                    <X className="w-[1.5dvw]" />
                </button>
                <p className="text-azul-1 dark:text-claro-2 text-[1.5dvw] font-semibold border-b">Gerenciar TAGs</p>
                {allTags && (
                    <div className="max-h-[30dvw] overflow-y-auto flex flex-col gap-[0.5dvw]">
                        {allTags
                            .sort((a, b) => a.nome.localeCompare(b.nome))
                            .map((tag) => (
                                <div key={tag.id_tag} className="flex justify-between items-center group dark:hover:bg-escuro-2 hover:bg-claro-1 py-[0.2dvw] px-[1dvw] cursor-default">
                                    <p className="dark:text-claro-2"> {tag.nome} </p>
                                    <Trash2 onClick={() => {
                                        console.log(tag)
                                        console.log("ID da tag a ser excluída:", tag.id_tag);
                                        handleDelete(tag.id_tag);
                                    }} className="w-[1.5dvw] h-[1.5dvw] group-hover:block hidden text-azul-1 dark:text-claro-2 dark:hover:text-vermelho-1 hover:text-vermelho-1 cursor-pointer" />
                                </div>
                            ))
                        }
                    </div>
                )}
                <div className="border-t">
                    <div className="flex rounded-[1.1dvw] mt-[1dvw] p-[0.3dvw] bg-claro-1 dark:bg-escuro-2 shadow-sombra2 pr-[0.5dvw] pl-[1dvw]">
                        <input
                            className="w-[90%] bg-claro-1 dark:bg-escuro-2 dark:text-claro-2 focus:outline-none text-[1dvw]"
                            placeholder="Digite para adicionar uma tag..."
                            value={newTag}
                            onChange={(e) => setNewTag(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleAddTag();
                                }
                            }}
                        />
                        <div className="flex justify-end items-center w-[10%]">
                            <button
                                onClick={handleAddTag}
                                className="flex justify-center items-center text-claro-1 hover:bg-azul-1 rounded-full w-[2dvw] h-[2dvw] dark:hover:bg-azul-1 bg-azul-2"
                            >
                                <Plus className="scale-75" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
