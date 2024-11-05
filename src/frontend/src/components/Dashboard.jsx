import { useState } from 'react';
import { House } from 'lucide-react';
import FerramentaPesquisa from './FerramentaPesquisa';
import Barras1 from './DashBarra1';
import Barras2 from './DashBarra2';
import CardDados from './CardDados';
import TagsRecentes from './TagsRecentes';
import Tabela from './Tabela';
import DashLinhas from './DashLinhas';
import Logo from '../assets/logo.png';
import DonutComponent from './DashDonut';
import DashCards from './DashCards';
const Dashboard = ({ dado, label, border, onVoltar }) => {
    const [regulations, setRegulations] = useState([]);

    return (
        <div className="flex flex-col h-[100dvh] px-[4dvw] items-center justify-center pt-[3dvw] dark:bg-escuro-1">
            <div className="flex fixed px-[5dvw] items-center justify-between top-0 right-0 bg-claro-2 w-full h-[7.5dvh] shadow-sombra dark:bg-escuro-1">
                <div className='flex'>
                    <p className="text-[2dvw] font-bold text-vermelho-1">C</p>
                    <p className="text-[2dvw] font-bold text-azul-1 dark:text-claro-2">ora</p>
                </div>
                <button onClick={onVoltar} className='flex items-center justify-center w-[2dvw] h-[2dvw] rounded-[0.4dvw] hover:bg-claro-1'>
                    <House className="w-[1.5dvw] h-[1.5dvw]" />
                </button>
            </div>
            <div className='flex flex-col gap-[1dvw]'>
                <div className='flex gap-[1dvw]'>
                    <DashCards />
                    <DashLinhas/>
                </div>
                <div className='flex gap-[1dvw]'>
                    <DonutComponent />
                    <Barras1 />
                    <Barras2 />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
