import { useState } from 'react';

const CardDados = ({ dado, label, border }) => {
    console.log(dado)
    // Lógica para determinar a cor da borda com base no valor do dado
    const getBorderColor = () => {
        if (border == true) {
            if (dado >= 85) {
                return 'border-green-500'; // Verde
            } else if (dado >= 65) {
                return 'border-yellow-500'; // Amarelo
            } else {
                return 'border-red-500'; // Vermelho
            }
        }
        return 'border-none'; // Sem borda
    };

    const formatDado = border ? `${dado}%` : dado;

    return (
        <div className={`flex bg-claro-2 shadow-sombra ${getBorderColor()} border-l-8 rounded-[1.5dvw] w-[40dvw] items-center justify-center h-[17dvh] gap-[2dvh] dark:bg-escuro-2`}>
            <p className='text-azul-2 font-bold text-[3dvw] dark:text-claro-1'>{formatDado}</p>
            <p className='text-escuro-1 font-medium text-[1dvw] dark:text-claro-2'>{label}</p>
        </div>
    );
}

export default CardDados;
