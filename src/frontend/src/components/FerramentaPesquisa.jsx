import { useState, useEffect } from "react";
import Microfone from "./Microfone";
import BarraPesquisa from "./BarraPesquisa"; 

const FerramentaPesquisa = ({ setInputPesquisa }) => {
    const [contagemAtiva, setContagemAtiva] = useState(false);
    const [duracaoContagem] = useState(3); 
    const [transcricao, setTranscricao] = useState(''); 
    const [textoPesquisa, setTextoPesquisa] = useState('');
    const handleStartRecording = (isPressed) => {
        if (isPressed) {
            setContagemAtiva(true);
        }
    };

    const handleContagemFinalizada = () => {
        setContagemAtiva(false);
        console.log("Iniciar gravação do microfone.");
    };

    const handleTranscricao = (texto) => {

        setTranscricao(texto);
        setTextoPesquisa(texto);
        console.log('Esse é o texto na ferramenta:', texto);
    };

    const handleInputChange = (texto) => {
        setTextoPesquisa(texto); 
        console.log('Esse é o texto na ferramenta:', texto);

    };

    useEffect(() => {
        setInputPesquisa(textoPesquisa); 
    }, [textoPesquisa, setInputPesquisa]);

    return (
        <div className="flex w-full justify-evenly">
            <BarraPesquisa 
                iniciarContagem={contagemAtiva} 
                duracao={duracaoContagem} 
                onContagemFinalizada={handleContagemFinalizada} 
                transcricao={transcricao} 
                onInputChange={handleInputChange}
            />
            <Microfone onStartRecording={handleStartRecording} onTranscricao={handleTranscricao} />
        </div>
    );
};

export default FerramentaPesquisa;
