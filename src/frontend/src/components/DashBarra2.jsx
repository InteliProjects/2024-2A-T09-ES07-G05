import React, { useRef } from 'react';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import BaseGraficos from './BaseGraficos';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Barras2 = () => {
    const chartRef = useRef(null);

    const data = {
        labels: ['Anbima', 'Selic', 'CVM', 'Bacen', 'B3', 'ANPD', 'BSM'],
        datasets: [
            {
                label: 'Documentos',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: '#012B90',
                borderColor: '#012B90',
                borderWidth: 1,
                barThickness: 31,
                borderRadius: 30,
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
                    display: true,
                },
            },
        },
    };

    return (
        <div style={{ width: '400px', height: '250px' }}>
            <BaseGraficos bgColor="bg-white dark:bg-gray-800">
            <div className='flex flex-col w-full h-full'>
            <p className='text-azul-2 ml-[1dvw] font-medium mb-[0.5dvw] text-[1dvw]'>Documentos por regulamentador</p>
                <Bar ref={chartRef} data={data} options={options} />
            </div>
            </BaseGraficos>
        </div>
    );
};

export default Barras2;
