import React, { useEffect, useState } from 'react';

const TagsRecentes = () => {
    const [topTags, setTopTags] = useState([]);

    // Função para buscar as top 5 tags do backend e ordenar por qtdNormas
    const fetchTopTags = async () => {
        try {
            const response = await fetch('http://localhost:8000/normas-tags/top-tags/');
            if (response.ok) {
                const data = await response.json();

                // Ordenar as tags pela quantidade de normas (qtdNormas) de forma decrescente
                const sortedTags = data.sort((a, b) => b.qtdNormas - a.qtdNormas);

                setTopTags(sortedTags);
            } else {
                console.error('Erro ao buscar as top 5 tags');
            }
        } catch (error) {
            console.error('Erro de conexão:', error);
        }
    };

    // Chamar a função fetchTopTags quando o componente for montado
    useEffect(() => {
        fetchTopTags();
    }, []);

    return (
        <div className='flex flex-col bg-claro-2 p-[2dvw] shadow-sombra rounded-[1.5dvw] w-[40dvw] justify-start h-[37dvh] dark:bg-escuro-2'>
            <div className='flex flex-col w-full justify-center'>
                <p className='text-azul-2 font-bold mb-[1dvw] text-[1dvw] dark:text-claro-2'>Assuntos Recentes</p>
                <div className='flex flex-col px-[1dvw]'>
                    {topTags.map((tag, index) => (
                        <div key={index}>
                            <div className='columns-2 justify-between'>
                                <div className='flex'>
                                    <p className='text-azul-2 font-bold mr-[1dvw] text-[1dvw] dark:text-claro-1'>{index + 1}.</p>
                                    <p className='text-escuro-2 text-[1dvw] dark:text-claro-2'>{tag.nome}</p>
                                </div>
                                <p className=' text-end text-[1dvw]  dark:text-claro-2'>{tag.qtdNormas}</p>
                            </div>
                            <div className='border border-b-1 my-[0.5dvw] dark:border-gray-200 dark:opacity-20'/>
                        </div>
                    ))}
                </div>            
            </div>
        </div>
    );
}

export default TagsRecentes;
