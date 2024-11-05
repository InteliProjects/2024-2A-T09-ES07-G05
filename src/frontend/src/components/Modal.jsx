import React, { useEffect, useState, useContext } from "react";
import CampoInfos from "./CampoInfos";
import { Download, X, Plus } from "lucide-react";
import Tag from "./Tag";
import { TagContext } from "../Context/TagContext";

export default function Modal({ open, onClose, content }) {
    const [tags, setTags] = useState([]);
    const { allTags, setAllTags } = useContext(TagContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");

    // Função para buscar as tags associadas à norma
    useEffect(() => {
        if (content) {
            const fetchTags = async () => {
                try {
                    const response = await fetch(`http://127.0.0.1:8000/normas-tags/${content.id_norma}`);
                    const data = await response.json();
                    const filteredTags = data.filter(tag => tag[3] === true);
                    setTags(filteredTags);
                } catch (error) {
                    console.error("Erro ao buscar tags:", error);
                }
            };

            fetchTags();
        }
    }, [content, allTags]);

    // Função para remover a tag da norma
    const handleTagRemove = async (id_norma_tag) => {
        try {
            await fetch(`http://127.0.0.1:8000/normas-tags/${id_norma_tag}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ classificacao: false }),
            });
            setTags(tags.filter(tag => tag[0] !== id_norma_tag));
        } catch (error) {
            console.error("Erro ao remover a tag:", error);
        }
    };

    // Função para buscar o nome da tag pelo ID
    const getTagName = (idTag) => {
        const tag = allTags.find(t => t.id_tag === idTag);
        return tag ? tag.nome : "Desconhecido";
    };
    
    // Função para abrir o dropdown de tags
    const handleInputClick = () => {
        setDropdownOpen(true);
    };

    // Função para selecionar uma tag do dropdown
    const handleTagSelect = async (tag) => {
        setInputValue(tag.nome);
        setDropdownOpen(false);
        await addNormaTag(tag.id_tag);
    };
    
    // Função para atualizar o valor do input
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    // Função para criar a tag se ela não existe ainda e a associar à norma
    const handleKeyPress = async (e) => {
        if (e.key === 'Enter') {
            const existingTag = allTags.find(tag => tag.nome.toLowerCase() === inputValue.toLowerCase());
            if (existingTag) {
                await addNormaTag(existingTag.id_tag);
            } else {
                const newTagId = await createTag(inputValue);
                await addNormaTag(newTagId);
            }
            setInputValue("");
        }
    };

    // Função para associar uma tag à norma
    const addNormaTag = async (id_tag) => {
        const tagExists = tags.some(tag => tag[2] === id_tag);
        if (tagExists) {
            console.log("Tag já associada à norma.");
            return;
        }
    
        try {
            const response = await fetch("http://127.0.0.1:8000/normas-tags", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id_tag, id_norma: content.id_norma, classificacao: true }),
            });
            const data = await response.json();
            setTags([...tags, [data.id, content.id_norma, id_tag, true]]);
        } catch (error) {
            console.error("Erro ao adicionar a tag:", error);
        }
    };
    
    
    // Função para criar uma nova tag
    const createTag = async (nome) => {
        try {
            const response = await fetch("http://127.0.0.1:8000/tags", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome }),
            });
            const data = await response.json();
            console.log("Nova tag criada:", data);
            setAllTags((prevTags) => [...prevTags, { id_tag: data.id, nome }]);
            console.log("Estado allTags atualizado:", allTags);
    
            return data.id;
        } catch (error) {
            console.error("Erro ao criar a tag:", error);
        }
    };
    
    return (
        <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? 'visible bg-black/20 dark:bg-black/50' : 'invisible'}`}>
            <div onClick={e => e.stopPropagation()} className={`bg-white rounded-[1.5dvw] shadow-sombra p-[2dvw] w-[60dvw] max-h-[35dvw] transition-all dark:bg-escuro-1 ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}>
                <button onClick={onClose} className="absolute top-[0.5dvw] right-[0.5dvw] px-[1dvw] py-[0.5dvw] rounded-lg text-gray-400 dark:hover:bg-escuro-2 hover:text-gray-600">
                    <X className="w-[1.5dvw]" />
                </button>
                {content && (
                    <div className="h-full flex flex-col">
                        <h2 className="text-azul-1 text-[1.3dvw] font-bold border-b pb-[0.5dvw] dark:text-claro-2">{content.nome}</h2>
                        <div className="flex flex-col mt-[2dvw] h-[8dvw] justify-between text-[1dvw] gap-[2dvw]">
                            <div className="flex justify-between">
                                <CampoInfos label="Expedição:" value={content.data_expedicao} />
                                <CampoInfos label="Regulador:" value={content.regulador} />
                            </div>
                            <div className="flex justify-between">
                                <CampoInfos label="Revogação:" value={content.revogacao ? "Sim" : "Não"} />
                                <CampoInfos label="Quantidade de tags:" value={tags.length} />
                            </div>
                        </div>
                        <div className="flex flex-col mt-[2dvw] w-full h-full gap-[1dvw]">
                            <p className="max-h-[5dvw] overflow-y-auto text-[1.1dvw] text-black/80 dark:text-claro-2">{content.descricao} </p>
                            <div className="flex rounded-[1dvw] border w-full py-[0.5dvw] px-[1dvw] gap-[0.5dvw] relative">
                                <p className="text-black/60 text-center dark:text-claro-2">Tags:</p>
                                <div className="flex flex-wrap gap-[0.5dvw] max-h-[4.6dvw] overflow-y-scroll w-full">
                                    {tags.map(tag => (
                                        <Tag
                                            key={tag[0]}
                                            onRemove={() => handleTagRemove(tag[0])}
                                            tagName={getTagName(tag[2])}
                                        />
                                    ))}
                                    <div className="flex items-center justify-evenly border-[0.15dvw] gap-[0.5dvw] border-dashed border-stone-400 px-[0.5dvw] focus:outline-none relative">
                                        <Plus className="w-[0.8dvw] h-[0.8dvw] text-stone-400" />
                                        <input
                                            type="text"
                                            value={inputValue}
                                            onClick={handleInputClick}
                                            onChange={handleInputChange}
                                            onKeyPress={handleKeyPress}
                                            placeholder="Adicionar tag"
                                            className={`placeholder:text-stone-400 text-stone-600 dark:text-claro-2 text-[0.8dvw] w-[6dvw] bg-transparent focus:outline-none`}
                                        />
                                    </div>
                                </div>
                                {dropdownOpen && (
                                    <div className="absolute top-[6.5dvw] left-[0dvw] right-[0   dvw] w-[56dvw] max-h-[9dvw] overflow-y-auto bg-white dark:bg-escuro-1 dark:border-none dark:text-claro-2 border rounded shadow-lg z-10">
                                        <ul>
                                            {allTags
                                                .filter(tag => tag.nome.toLowerCase().includes(inputValue.toLowerCase()))
                                                .map(tag => (
                                                    <li
                                                        key={tag.id_tag}
                                                        className="p-[0.5dvw] hover:bg-gray-100 dark:hover:bg-escuro-2 cursor-pointer"
                                                        onClick={() => handleTagSelect(tag)}
                                                    >
                                                        {tag.nome}
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <button
                                onClick={() => content.link_s3 && window.open(content.link_s3)}
                                className={`flex self-end text-center text-[1.2dvw] font-medium justify-evenly rounded-full shadow-sombra w-[8dvw] py-[0.3dvw] px-[1dvw] 
                                    ${content.link_s3 ? "bg-azul-2 text-claro-2 hover:bg-[#002886] hover:text-white cursor-pointer" : "bg-gray-300 text-gray-500 cursor-default"}`}
                                disabled={!content.link_s3}
                                >
                                <Download className="w-[1.1dvw]" />
                                <p>Baixar</p>
                                </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );    
}
