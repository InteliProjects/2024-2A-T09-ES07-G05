import React, { useRef } from 'react';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import BaseGraficos from './BaseGraficos';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Barras1 = () => {
    const chartRef = useRef(null);

    const data = {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Regulamentações',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: '#032169',
                borderColor: '#032169',
                borderWidth: 1,
                barThickness: 31,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 20,
                    min: 0,
                    max: 100,
                },
                grid: {
                    display: true,
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
            <p className='text-azul-2 ml-[1dvw] font-medium mb-[0.5dvw] text-[1dvw]'>Regulamentações por mês</p>
                <Bar ref={chartRef} data={data} options={options} />
            </div>

            </BaseGraficos>
        </div>
    );
};

export default Barras1;
