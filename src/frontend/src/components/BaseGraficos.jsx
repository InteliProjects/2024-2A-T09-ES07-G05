// BaseGraficos.js
import React from 'react';

const BaseGraficos = ({ bgColor = 'bg-claro-2', children }) => {
    return (
        <div className={`flex items-center justify-center pl-[0.5dvw] pr-[1dvw] py-[1dvw] shadow-sombra rounded-[1.5dvw] w-full h-full ${bgColor}`}>
            {children}
        </div>
    );
};

export default BaseGraficos;
