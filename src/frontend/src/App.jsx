import './App.css';
import Logo from './assets/logo.png';
import BarraPesquisa from './components/BarraPesquisa';
import Microfone from './components/Microfone';
import { useEffect, useState, useRef, useContext } from 'react';
import TagsRecentes from './components/TagsRecentes';
import CardDados from './components/CardDados';
import Tabela from './components/Tabela';
import { Sun, Moon, Tag, ChartLine, Menu } from "lucide-react"
import FerramentaPesquisa from './components/FerramentaPesquisa';
import ModalLista from './components/Modal_Lista';
import Dashboard from './components/Dashboard';
import { LoaderContext } from './Context/LoaderContext';

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('dark-mode') === 'true'
  );

  const tableRef = useRef(null);
  const [allRegulations, setAllRegulations] = useState([]); // Armazena todas as normas do placeholder
  const [inputPesquisa, setInputPesquisa] = useState(''); // Armazena o input do usuário
  const [regulations, setRegulations] = useState([]);
  const [confiabilidade, setConfiabilidade] = useState(0);
  const [novasRegulamentacoes, setNovasRegulamentacoes] = useState(0);

  const [tagMaisFrequente, setTagMaisFrequente] = useState('');
  const [qtdTagMaisFrequente, setQtdTagMaisFrequente] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const [open, setOpen] = useState(false);
  const [dashOpen, setDashOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { isLoading, setIsLoading } = useContext(LoaderContext);

  const handleClick = () => {
    setOpen(true);
  };

  // Função para escutar SSE e atualizar normas em tempo real
  useEffect(() => {
    const eventSource = new EventSource('http://127.0.0.1:8080/stream');

    eventSource.onmessage = (event) => {

      let data;
      try {
        console.log('Recebendo normas:', event.data);
        data = JSON.parse(event.data);
      } catch (error) {
        console.error("Erro ao parsear as normas recebidas:", error);
        return;
      }

      let normasStream = [];

      if (data.message === "Nenhuma norma disponível no momento.") {
        normasStream = [];
      } else if (data.normas && Array.isArray(data.normas)) {
        if (data.normas.length === 0) {
          normasStream = [];

        } else {
          normasStream = data.normas;
        }
      } else {
        console.error("As normas recebidas não são um array:", data);
        return;
      }

      const normasFiltradas = allRegulations.filter((norma) =>
        norma.nome.toLowerCase().includes(inputPesquisa.toLowerCase())
      );

      setRegulations([...normasFiltradas, ...normasStream]);
      setIsLoading(false);
      
      if(regulations && tableRef.current) {
              tableRef.current.scrollIntoView({ behavior: 'smooth' });
            }
    };

    eventSource.onerror = (error) => {
      console.error('Erro ao receber eventos SSE:', error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [allRegulations, inputPesquisa]);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 420) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('dark-mode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    async function fetchNormasTags() {
      try {
        const response = await fetch('http://127.0.0.1:8000/normas-tags');
        const data = await response.json();
  
        const total = data.length;
        const trueCount = data.filter(item => item.classificacao === true).length; // Corrigido para acessar a chave 'classificacao'
  
        const porcentagemTrue = Math.floor((trueCount / total) * 100);
        setConfiabilidade(porcentagemTrue);
      } catch (error) {
        console.error('Erro ao buscar normas-tags:', error);
      }
    }
  
    fetchNormasTags();
  }, []);
  

  const fetchAllNormas = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/normas');
      const data = await response.json();

      setAllRegulations(data); // Salva todas as normas para usar como placeholder e para filtrar
      setRegulations(data);

      const hoje = new Date();
      const doisDiasAtras = new Date();
      doisDiasAtras.setDate(hoje.getDate() - 2);

      const formatarData = (data) => {
        const d = new Date(data);
        let mes = '' + (d.getMonth() + 1);
        let dia = '' + d.getDate();
        const ano = d.getFullYear();

        if (mes.length < 2) mes = '0' + mes;
        if (dia.length < 2) dia = '0' + dia;

        return [ano, mes, dia].join('-');
      };

      const dataHoje = formatarData(hoje);
      const dataDoisDiasAtras = formatarData(doisDiasAtras);

      const regulamentacoesRecentes = data.filter((norma) => {
        return norma.data_expedicao >= dataDoisDiasAtras && norma.data_expedicao <= dataHoje;
      });

      setNovasRegulamentacoes(regulamentacoesRecentes.length);

      const semanaAtras = new Date();
      semanaAtras.setDate(hoje.getDate() - 7);
      const dataSemanaAtras = formatarData(semanaAtras);

      const regulamentacoesSemana = data.filter((norma) => {
        return norma.data_expedicao >= dataSemanaAtras && norma.data_expedicao <= dataHoje;
      });

      const tagContagem = {};
      regulamentacoesSemana.forEach((norma) => {
        norma.tags.forEach((tag) => {
          if (tagContagem[tag]) {
            tagContagem[tag]++;
          } else {
            tagContagem[tag] = 1;
          }
        });
      });

      let tagFrequente = '';
      let qtdFrequente = 0;
      for (const tag in tagContagem) {
        if (tagContagem[tag] > qtdFrequente) {
          tagFrequente = tag;
          qtdFrequente = tagContagem[tag];
        }
      }

      setTagMaisFrequente(tagFrequente);
      setQtdTagMaisFrequente(qtdFrequente);

    } catch (error) {
      console.error('Erro ao buscar regulamentações:', error);
    }
  };

  useEffect(() => {
    fetchAllNormas();
  }, []);

  const handleDash = () => {
    setDashOpen(true);
  }

  const voltarParaPaginaPrincipal = () => {
    setDashOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  }

  return (
    <>
      {dashOpen ? (
        <Dashboard onVoltar={voltarParaPaginaPrincipal} />
      ) : (
        <>
          <div className="flex flex-col h-[250dvh] p-[4dvh] dark:bg-escuro-1">
            <div className={`${isFixed ? 'fixed top-0 right-0 bg-claro-2 w-full h-[7.5dvh] shadow-sombra dark:bg-escuro-1' : 'stick bg-transparent w-[50dvw]'}`}>
              {isFixed ?
                <div className="flex ml-[5dvh] h-[7.5dvh]">
                  <p className="text-[2dvw] font-bold text-vermelho-1">C</p>
                  <p className="text-[2dvw] font-bold text-azul-1 dark:text-claro-2">ora</p>
                </div>
                : null
              }
            </div>
            <div className={`${isFixed ? (dropdownOpen ? 'fixed bg-claro-2 dark:bg-escuro-2 shadow-sombra2 top-[4dvw] right-[1dvw] h-[9.5dvw] w-[4dvw]' : 'hidden') : 'hidden'}`}></div>
            <div className="flex justify-between h-[1.5dvw]">
              <img src={Logo} alt="Logo" className="w-[10dvw]" />
              <div className='flex space-x-[1dvw]'>
                <button onClick={handleClick} className={`${isFixed ? (dropdownOpen ? 'flex fixed items-center justify-center top-[4.5dvw] right-[2dvw] h-[2dvw] w-[2dvw]': 'hidden' ) : 'flex items-center justify-center h-[2dvw] w-[2dvw]'}`}>
                  {darkMode ? <Tag className="w-[1.5dvw] h-[1.5dvw]" color='white' /> : <Tag className="w-[1.5dvw] h-[1.5dvw]" color='black' />}
                </button>
                <button onClick={handleDash} className={`${isFixed ? (dropdownOpen ? 'flex fixed items-center justify-center top-[7.5dvw] right-[2dvw] h-[2dvw] w-[2dvw]' : 'hidden' ) : 'flex items-center justify-center h-[2dvw] w-[2dvw]'}`}>
                  {darkMode? <ChartLine className="w-[1.5dvw] h-[1.5dvw]" color='white'/> : <ChartLine className="w-[1.5dvw] h-[1.5dvw]" color='black'/>}
                </button>
                <button onClick={toggleDarkMode} className={`${isFixed ? (dropdownOpen ? 'flex fixed items-center justify-center top-[11dvw] right-[2dvw] h-[2dvw] w-[2dvw]' : 'hidden' ) : 'flex items-center justify-center h-[2dvw] w-[2dvw]'}`}>
                  {darkMode ? <Moon className="w-[1.5dvw] h-[1.5dvw]" color='white' /> : <Sun className="w-[1.5dvw] h-[1.5dvw]" color='black' />}
                </button>
                <button onClick={toggleDropdown} className={`${isFixed ? 'fixed items-center justify-center top-[1.5dvh] right-[2.5dvh] h-[2dvw] w-[2dvw]' : 'hidden'}`}>
                  {darkMode ? <Menu className="w-[1.5dvw] h-[1.5dvw]" color='white' /> : <Menu className="w-[1.5dvw] h-[1.5dvw]" color='black' />}
                </button>
            </div>
          </div>
          <div className="flex flex-col w-full h-[100dvh] justify-center items-center">
            <div className="flex mb-[5dvh]">
              <p className="text-[8dvw] font-bold text-vermelho-1">C</p>
              <p className="text-[8dvw] font-bold text-azul-1 dark:text-claro-2">ora</p>
            </div>
            <div className="flex w-[60dvw] justify-center">
              <FerramentaPesquisa setInputPesquisa={setInputPesquisa} />
            </div>
          </div>
          <div className="flex flex-col mx-[7dvw] mt-[5dvw] h-[140dvh] gap-[6dvw] items-center">
            <div className="flex w-[100%] justify-between">
              <TagsRecentes tag={tagMaisFrequente} qtdNormas={qtdTagMaisFrequente} />
              <div className="flex flex-col gap-[20px]">
                <CardDados dado={novasRegulamentacoes} label={'Regulamentações novas nas últimas 24 horas'} border={false} />
                <CardDados dado={confiabilidade} label={'Confiabilidade do tagueamento automático'} border={true} />
              </div>
            </div>
            <section ref={tableRef}>
            <Tabela regulations={regulations} />
            </section>
          </div>
        </div>
      <ModalLista open={open} onClose={() => setOpen(false)} />
    </>
  )
}
    </>
  );
}

export default App;