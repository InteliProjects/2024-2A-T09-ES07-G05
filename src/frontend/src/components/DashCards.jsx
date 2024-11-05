import React from 'react';
import BaseGraficos from './BaseGraficos';
import { Tag, Trash, Plus, Space } from "lucide-react"

const DashCards = () => {  

    return (
        <div style={{ width: '613px', height: '250px' }}>
            <BaseGraficos bgColor="bg-white dark:bg-gray-800">
                <div className='flex flex-col w-full h-full'>
                    <p className='text-azul-2 ml-[1dvw] font-medium mb-[0.5dvw] text-[1dvw]'>Estatísticas de tags</p>
                    <div className='flex'>
                        <div className='flex flex-col ml-[2dvw] w-[30%] rounded-[1.5dvw] bg-blue-200/50 px-[0.5dvw] py-[0.5dvw]'>
                            <div className='flex self-end'>
                                <p className='bg-slate-200 px-[0.5dvw] py-[0.2dvw] text-[0.8dvw] rounded-s-lg'>Mês</p>
                                <p className='bg-blue-200/80 px-[0.5dvw] py-[0.2dvw] text-[0.8dvw] rounded-e-lg'>Ano</p>
                            </div>
                            <div className='flex self-center items-center justify-center rounded-full bg-blue-200/50 mb-[0.5dvw] w-[4dvw] h-[4dvw]'>
                                <div className='flex self-center items-center justify-center rounded-full bg-blue-300/50 w-[3dvw] h-[3dvw]'>
                                    <Tag className='text-azul-2 ' size='1.5dvw' />
                                </div>
                            </div>
                            <div className='flex justify-between mx-[1dvw]'>
                                <div className='flex flex-col text-[0.8dvw] text-azul-1 '>
                                    <p>1. Crédito </p>
                                    <p>1. Finanças </p>
                                    <p>1. Fundos </p>
                                </div>
                                <div className='flex flex-col text-[0.8dvw] text-azul-1'>
                                    <p>23</p>
                                    <p>12</p>
                                    <p>07</p>
                                </div>
                            </div>
                            <div className='self-center my-[1dvw] h-[0.01dvw] w-[30%] bg-azul-1'></div>
                            <div className='self-center flex space-x-1'>
                                <p className='text-center text-[0.9dvw]'>Tags </p>
                                <p className='text-center text-azul-1 text-[0.9dvw]'> mais usadas</p>
                                <p className='text-center  text-[0.9dvw]'> no</p>
                            </div>
                                <p className='text-center  text-[0.9dvw]'>último mês</p>
                        </div>


                        <div className='flex flex-col items-center justify-center ml-[2dvw] w-[30%] rounded-[1.5dvw] bg-red-200/50 px-[0.5dvw] py-[0.5dvw]'>
                            <div className='flex self-center items-center justify-center rounded-full bg-red-200/50 mb-[0.5dvw] w-[4dvw] h-[4dvw]'>
                                <div className='flex self-center items-center justify-center rounded-full bg-red-300/60 w-[3dvw] h-[3dvw]'>
                                    <Trash className='text-vermelho-1 ' size='1.5dvw' />
                                </div>
                            </div>
                            <p className='self-center text-[2dvw] font-medium text-vermelho-1'>72</p>
                            <div className='self-center my-[1dvw] h-[0.01dvw] w-[30%] bg-vermelho-1'></div>
                            <div className='flex space-x-1'>
                                <p className='text-center text-[0.9dvw]'>Tags </p>
                                <p className='text-center text-vermelho-1 text-[0.9dvw]'> descartadas</p>
                                <p className='text-center  text-[0.9dvw]'> no</p>
                            </div>
                            <p className='text-center  text-[0.9dvw]'>último mês</p>
                            
                        </div>

                
                        <div className='flex flex-col items-center justify-center ml-[2dvw] w-[30%] rounded-[1.5dvw] bg-blue-200/50 px-[0.5dvw] py-[0.5dvw]'>
                            <div className='flex self-center items-center justify-center rounded-full bg-blue-200/50 mb-[0.5dvw] w-[4dvw] h-[4dvw]'>
                                <div className='flex self-center items-center justify-center rounded-full bg-blue-300/50 w-[3dvw] h-[3dvw]'>
                                    <Plus className='text-azul-2 ' size='1.5dvw' />
                                </div>
                            </div>
                            <p className='self-center text-[2dvw] font-medium'>119</p>
                            <div className='self-center my-[1dvw] h-[0.01dvw] w-[30%] bg-azul-1'></div>
                            <div className='flex space-x-1'>
                                <p className='text-center text-[0.9dvw]'>Tags </p>
                                <p className='text-center text-azul-1 text-[0.9dvw]'> descartadas</p>
                                <p className='text-center  text-[0.9dvw]'> no</p>
                            </div>
                                <p className='text-center  text-[0.9dvw]'>último mês</p>
                        </div>
                    </div>

                </div>
            </BaseGraficos>
        </div>
    );
};

export default DashCards;
