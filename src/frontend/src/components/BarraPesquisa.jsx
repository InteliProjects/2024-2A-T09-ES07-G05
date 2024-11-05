import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Loader from "./Loader";
import { useContext } from "react";
import { LoaderContext } from "../Context/LoaderContext";

const BarraPesquisa = ({ onInputChange, onSearch, transcricao, iniciarContagem, duracao, onContagemFinalizada }) => {
    const [isFixed, setIsFixed] = useState(false);
    const [pesquisa, setPesquisa] = useState(transcricao || '');
    const [placeholder, setPlaceholder] = useState("Digite uma regulamentação...");
    const [tempoRestante, setTempoRestante] = useState(duracao);
    const [gravando, setGravando] = useState(false);
    const { isLoading, setIsLoading } = useContext(LoaderContext);

    // Monitorar a rolagem para ajustar a posição da barra
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsFixed(scrollPosition > 420);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Atualizar o placeholder com a contagem regressiva
    useEffect(() => {
        if (iniciarContagem && tempoRestante > 0) {
            setPlaceholder(`Começando a gravar em ${tempoRestante}...`);
        } else if (gravando) {
            setPlaceholder("Ouvindo...");
        } else {
            setPlaceholder("Digite uma regulamentação...");
        }
    }, [tempoRestante, iniciarContagem, gravando]);

    // Lógica da contagem regressiva
    useEffect(() => {
        if (iniciarContagem) {
            setPesquisa(''); // Limpar o valor do input
            setTempoRestante(duracao); // Resetar o tempo restante ao iniciar a contagem
            const timer = setInterval(() => {
                setTempoRestante(prevTempo => {
                    if (prevTempo > 1) {
                        return prevTempo - 1;
                    } else {
                        clearInterval(timer);
                        setGravando(true); 
                        onContagemFinalizada();
                        return 0;
                    }
                });
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [iniciarContagem, duracao, onContagemFinalizada]);

    // Monitorar mudanças na transcrição e verificar o valor
    useEffect(() => {
        if (transcricao) {
            setPesquisa(transcricao);
            setGravando(false); // Parar gravação quando a transcrição é recebida
        }
    }, [transcricao]);

    const handleInputChange = (e) => {
        const texto = e.target.value;
        setPesquisa(texto);
        if (onInputChange) {
            onInputChange(texto); 
        }
        console.log('Esse é o texto na barra:', texto);
    };

    // Função para lidar com a pesquisa
    const handleSearch = async () => {
        if (pesquisa.trim() !== '') {
            try {
                const response = await fetch('http://localhost:8080/webhook/transcription-completed', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ text: pesquisa })
                });

                if (!response.ok) {
                    throw new Error('Erro ao enviar pesquisa ao webhook');
                }

                if (onSearch) {
                    onSearch(pesquisa);
                    
                }

                
            } catch (error) {
                console.error('Erro ao enviar ao webhook:', error);
            }
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
            setIsLoading(true);
        }
    };

    return (
        <div className={`${isFixed ? 'fixed flex items-center justify-center top-2 right-24 w-[30dvw] h-[5dvh] border border-gray-300 dark:border-none shadow-none py-[0.3dvw]' : 'flex transition-transform shadow-sombra w-[50dvw] '} transition-all duration-1000 rounded-[1.5dvw] bg-claro-1 dark:bg-escuro-2 dark:rounded-[1.5dvw]`}>
            <Search className='w-[1.5dvw] self-center h-[1.5dvw] ml-[2dvh] text-escuro-2 dark:text-claro-2' />
            <input
                type="text"
                className={`pl-[2dvh] pr-[1dvw] text-[1dvw] dark:text-claro-2 bg-transparent w-[100%] focus:outline-none ${placeholder == 'Digite uma regulamentação...' ? 'placeholder:text-gray-400 dark:text-claro-2' : 'placeholder:text-vermelho-2 '}`}
                placeholder={placeholder}
                value={pesquisa}
                onKeyDown={handleKeyDown}
                onChange={handleInputChange}
            />
            <div className={`${isLoading ? ( isFixed ? 'flex items-center justify-center scale-[0.4] h-[4dvw]' : 'flex scale-50' ) : 'hidden' }`}>
                <Loader/>
            </div>
        </div>
    );
};

export default BarraPesquisa;
