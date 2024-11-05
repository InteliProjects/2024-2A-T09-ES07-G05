import { useState, useRef, useEffect } from "react";

const Microfone = ({ onStartRecording, onTranscricao }) => {
    const [cor, setCor] = useState('#00195C');
    const [gravando, setGravando] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const recognitionRef = useRef(null);

    const handleClick = () => {
        if (gravando) {
            pararGravacao();
        } else {
            iniciarGravacao();
        }
    };

    const iniciarGravacao = () => {
        recognitionRef.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognitionRef.current.lang = 'pt-BR';
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;

        recognitionRef.current.onstart = () => {
            console.log("Reconhecimento de fala iniciado.");
            setCor('#E31836'); // Muda a cor ao iniciar a gravação
            setGravando(true);
            onStartRecording(true); // Notificar o componente da barra que o mic foi pressionado
        };

        recognitionRef.current.onresult = (event) => {
            const transcricao = event.results[0][0].transcript;
            console.log("Transcrição: ", transcricao);
            onTranscricao(transcricao); // Passar a transcrição para o componente pai
        };

        recognitionRef.current.onerror = (event) => {
            console.error("Erro no reconhecimento de fala: ", event.error);
        };

        recognitionRef.current.onend = () => {
            console.log("Reconhecimento de fala finalizado.");
            setCor('#00195C'); // Muda a cor de volta para azul quando a gravação termina
            setGravando(false);
            onStartRecording(false); // Notificar o componente pai que a gravação terminou
        };

        recognitionRef.current.start(); // Ativa o reconhecimento de fala
    };

    const pararGravacao = () => {
        if (recognitionRef.current) {
            recognitionRef.current.stop(); // Para o reconhecimento de fala
        }
    };

    // Monitorar a rolagem para ajustar a posição do microfone
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

    return (
<button
  onClick={handleClick}
  className={`${isFixed ? 'fixed flex items-center justify-center top-2 right-14 w-[5dvh] h-[5dvh] shadow-none border border-gray-300 dark:border-none' : 'flex shadow-sombra w-[8dvh] h-[8dvh]'} rounded-[1.5dvw] justify-center items-center bg-claro-1 dark:bg-escuro-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300`}
>
  <div>
    <svg
      width={isFixed ? '13' : '20'}
      height={isFixed ? '13' : '20'}
      viewBox="0 0 36 44"
      xmlns="http://www.w3.org/2000/svg"
      className={`${gravando ? 'fill-[#E31836]' : 'fill-[#00195C] dark:fill-white'}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 0C15.7085 0 13.5109 0.92714 11.8906 2.57746C10.2703 4.22778 9.35997 6.46609 9.35997 8.8V19.8C9.35997 22.1339 10.2703 24.3722 11.8906 26.0225C13.5109 27.6729 15.7085 28.6 18 28.6C20.2914 28.6 22.4891 27.6729 24.1094 26.0225C25.7297 24.3722 26.64 22.1339 26.64 19.8V8.8C26.64 6.46609 25.7297 4.22778 24.1094 2.57746C22.4891 0.92714 20.2914 0 18 0ZM2.87997 17.6C3.45284 17.6 4.00224 17.8318 4.40732 18.2444C4.8124 18.6569 5.03997 19.2165 5.03997 19.8C5.03997 23.3009 6.4054 26.6583 8.83587 29.1338C11.2663 31.6093 14.5628 33 18 33C21.4372 33 24.7336 31.6093 27.1641 29.1338C29.5945 26.6583 30.96 23.3009 30.96 19.8C30.96 19.2165 31.1875 18.6569 31.5926 18.2444C31.9977 17.8318 32.5471 17.6 33.12 17.6C33.6928 17.6 34.2422 17.8318 34.6473 18.2444C35.0524 18.6569 35.28 19.2165 35.28 19.8C35.2804 24.0871 33.7444 28.2269 30.9605 31.4423C28.1766 34.6578 24.3361 36.7277 20.16 37.2636V41.8C20.16 42.3835 19.9324 42.9431 19.5273 43.3556C19.1222 43.7682 18.5728 44 18 44C17.4271 44 16.8777 43.7682 16.4726 43.3556C16.0675 42.9431 15.84 42.3835 15.84 41.8V37.2636C11.6639 36.7277 7.82337 34.6578 5.03944 31.4423C2.25551 28.2269 0.719578 24.0871 0.719971 19.8C0.719971 19.2165 0.947542 18.6569 1.35262 18.2444C1.7577 17.8318 2.3071 17.6 2.87997 17.6Z"
      />
    </svg>
  </div>
</button>

    );
};

export default Microfone;
