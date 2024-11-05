import React, { useRef } from 'react';
import { Chart, CategoryScale, LinearScale, Tooltip, Legend, PointElement, LineElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import BaseGraficos from './BaseGraficos';

// Registrar os componentes específicos para gráficos de linha
Chart.register(CategoryScale, LinearScale, Tooltip, Legend, PointElement, LineElement);

const DashLinhas = () => {
    const chartRef = useRef(null);

    const data = {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
        datasets: [
            {
                label: '%',
                data: [65, 59, 20, 81, 56, 55, 40],
                borderColor: '#012B90',
                backgroundColor: 'rgba(1, 43, 144, 0.2)',
                fill: true,
                borderWidth: 2,
                pointRadius: 3,
                pointBackgroundColor: '#012B90',
                tension: 0.4, // Adiciona um efeito de curvatura suave
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Oculta a legenda para o gráfico de linhas
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 25,
                    min: 0,
                    max: 100,
                    callback: function(value) {
                        return value + '%'; // Exibir os índices em formato de porcentagem
                    },
                },
                grid: {
                    display: false,
                },
            },
            x: {
                grid: {
                    display: false,
                },
            },
        },
    };

    return (
        <div style={{ width: '400px', height: '250px' }}>
            <BaseGraficos bgColor="bg-white dark:bg-gray-800">
            <div className='flex flex-col w-full h-full'>
            <p className='text-azul-2 ml-[1dvw] font-medium mb-[0.5dvw] text-[1dvw]'>Confiabilidade do tagueamento por mês (%)</p>
                <Line ref={chartRef} data={data} options={options} />
                <div/>
            </div>
            </BaseGraficos>
        </div>
    );
};

export default DashLinhas;
