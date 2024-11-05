import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import Modal from './Modal';
import Dropdown from './Dropdown';

export default function Tabela({ regulations }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [selectedRegulation, setSelectedRegulation] = useState(null);
  const [filters, setFilters] = useState({});
  const [filteredItems, setFilteredItems] = useState(regulations);

  const itemsPerPage = 10;
  const totalItems = filteredItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleRowClick = (reg) => {
    setSelectedRegulation(reg);
    setOpen(true);
  };

  const applyFilters = (filters) => {
    setFilters(filters);
    setCurrentPage(1); 
  };

  useEffect(() => {
    let filtered = regulations;
  
    if (filters.dataInicio && filters.dataFim) {
      filtered = filtered.filter((norma) => {
        const normaDate = new Date(norma.data_expedicao.split('/').reverse().join('-')); // Convertendo para o formato ISO
        return normaDate >= filters.dataInicio && normaDate <= filters.dataFim;
      });
    }

    if (filters.assunto) {
      filtered = filtered.filter((norma) => norma.tags.includes(filters.assunto));
    }
  
    if (filters.orgao) {
      filtered = filtered.filter((norma) => norma.regulador === filters.orgao);
    }
  
    setFilteredItems(filtered);
  }, [filters, regulations]);
  

  return (
    <>
      <div className="flex flex-col h-[83dvh] w-full bg-white shadow-sombra rounded-[1.8dvw] dark:bg-escuro-2">
        <div className="overflow-x-auto w-full flex-grow rounded-[1.8dvw]">
          <table className="w-full text-sm table-fixed">
            <thead className="text-[1dvw] uppercase bg-gray-50 dark:bg-escuro-1 dark:bg-opacity-50 dark:text-claro-2">
              <tr>
                <th className="w-[50%] py-[1.6dvh] pl-[3%] text-left">Norma</th>
                <th className="w-[8%] py-[1.6dvh] text-left">Data</th>
                <th className="w-[15%] py-[1.6dvh] text-left">Assunto</th>
                <th className="w-[8%] py-[1.6dvh] text-left">Revoga</th>
                <th className="w-[10%] py-[1.6dvh] pr-[3%] text-left">Órgão</th>
              </tr>
            </thead>
            <tbody className="align-top">
              {currentItems.length > 0 ? (
                currentItems.map((reg, index) => (
                  <tr
                    key={index}
                    onClick={() => handleRowClick(reg)}
                    className="text-[1dvw] border-b hover:bg-gray-50 cursor-pointer dark:hover:bg-escuro-1 dark:hover:bg-opacity-25 dark:text-claro-2"
                  >
                    <td className="py-[1.6dvh] px-[3%] font-medium text-nowrap overflow-clip text-ellipsis text-gray-900 dark:text-claro-2">
                      {reg.nome}
                    </td>
                    <td className="py-[1.6dvh] text-nowrap overflow-clip text-ellipsis">
                      {reg.data_expedicao}
                    </td>
                    <td className="py-[1.6dvh] pr-[2%] text-nowrap overflow-clip text-ellipsis">
                      {reg.descricao}
                    </td>
                    <td className="py-[1.6dvh] pr-[1%] text-nowrap overflow-clip text-ellipsis">
                      {reg.revogacao ? 'Sim' : 'Não'}
                    </td>
                    <td className="py-[1.6dvh] pr-[3%] text-nowrap overflow-clip text-ellipsis">
                      <a href={`https://anbima.com.br`} target="_blank" className="text-blue-600 hover:underline">
                        anbima.com.br
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-3 text-center">
                    Nenhuma norma encontrada.
                  </td>
                </tr>
              )}
              <tr className="h-full">
                <td colSpan="5"></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-full rounded-b-[1.8dvw] px-[3%] py-[1.6dvh] bg-claro-2 dark:bg-escuro-1 dark:bg-opacity-50">
          <div className="flex w-full items-center justify-start">
            <div className="w-[10%] mr-[1dvh]">
              <p className="text-[1dvw] text-gray-900 dark:text-claro-2">
                {startIndex + 1} - {Math.min(endIndex, totalItems)} de {totalItems}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="p-2 rounded-full hover:bg-gray-200 dark:bg-escuro-1 dark:bg-opacity-25 dark:hover:bg-escuro-3 disabled:opacity-50"
              >
                <ChevronLeft className="w-[1.5dvw] h-[1.5dvw] dark:text-white dark:hover:text-gray-400" />
              </button>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="p-2 rounded-full hover:bg-gray-200 dark:bg-escuro-1 dark:bg-opacity-25 dark:hover:bg-escuro-3 disabled:opacity-50"
              >
                <ChevronRight className="w-[1.5dvw] h-[1.5dvw] dark:text-white dark:hover:text-gray-400" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-200 dark:bg-escuro-1 dark:bg-opacity-25 dark:hover:bg-escuro-3">
                <Filter className="w-[1.5dvw] h-[1.5dvw] dark:text-white dark:hover:text-gray-400" />
              </button>

              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Dropdown onApplyFilters={applyFilters} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} content={selectedRegulation} />
    </>
  );
}
