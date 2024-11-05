import React from 'react';
import { Doughnut as DoughnutChart } from 'react-chartjs-2'; // Renomeando a importação para evitar conflito
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import BaseGraficos from './BaseGraficos';

// Registre os componentes que serão usados do chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutComponent = () => {  // Novo nome para o componente
    const dataValues = [232, 609]; // Dados que você está usando
    const data = {
        labels: ['Por áudio', 'Por texto'],
        datasets: [
            {
                label: 'N° de pesquisas',
                data: dataValues,
                backgroundColor: [
                    '#E31836',
                    '#032169',
                ],
                borderColor: [
                    '#E31836',
                    '#032169',
                ],
                borderWidth: 0.5,  // Ajuste a largura da borda
            },
        ],
    };

    // Calcule a soma dos dados
    const totalResearches = dataValues.reduce((acc, curr) => acc + curr, 0);

    const options = {
        responsive: true,
        cutout: '70%',
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    font: {
                        size: 10,
                    },
                    padding: 10, // Reduz o espaço entre o gráfico e a legenda
                    usePointStyle: true, // Usar círculos em vez de quadrados
                    generateLabels: (chart) => {
                        const data = chart.data;
                        if (data.labels.length && data.datasets.length) {
                            return data.labels.map((label, i) => {
                                const dataset = data.datasets[0];
                                const backgroundColor = dataset.backgroundColor[i];
                                return {
                                    text: label,
                                    fillStyle: backgroundColor,
                                    strokeStyle: backgroundColor,
                                    lineWidth: 1,
                                    hidden: false,
                                    index: i,
                                };
                            });
                        }
                        return [];
                    },
                },
            },
            tooltip: {
                enabled: true, // Ativar tooltips
            },
        },
    };

    return (
        <div style={{ width: '200px', height: '250px' }}>
            <BaseGraficos bgColor="bg-blue-200/50 dark:bg-gray-800">
                <div className='flex flex-col w-full h-full gap-4 justify-center'>
                    <div className='flex justify-between'>
                        <p className='text-azul-2 ml-[1dvw] font-medium mb-[1dvw] text-[1dvw]'>Pesquisas</p>
                        <div className='flex scale-75'>
                            <p className='bg-slate-200 px-[0.5dvw] rounded-s-lg h-[2.5dvw]'>Mês</p>
                            <p className='bg-sky-200 px-[0.5dvw] rounded-e-lg'>Ano</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <DoughnutChart data={data} options={options} />
                    </div>
                    <div className='absolute flex items-center justify-center left-[15.5dvw] top-[33.5dvw] bg-claro-2 rounded-full w-[4dvw] h-[4dvw]'>
                        <p>{totalResearches}</p> {/* Exibe a soma dos dados */}
                    </div>
                </div>
            </BaseGraficos>
        </div>
    );
};

export default DonutComponent;
