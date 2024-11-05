import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Dropdown = ({ onApplyFilters }) => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [tags, setTags] = useState([]);
  const [reguladores, setReguladores] = useState([]);

  const handleSelectChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleSelectChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const getPlaceholderStyle = (value) => {
    return {
      color: value === '' ? '#a9a9a9' : '#002776',
    };
  };

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/tags');
        const data = await response.json();
        setTags(data);
      } catch (error) {
        console.error('Erro ao buscar as tags:', error);
      }
    };

    const fetchReguladores = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/normas');
        const data = await response.json();
        const uniqueReguladores = [...new Set(data.map(norma => norma.regulador))];
        setReguladores(uniqueReguladores);
      } catch (error) {
        console.error('Erro ao buscar os reguladores:', error);
      }
    };

    fetchTags();
    fetchReguladores();
  }, []);

  const applyFilters = () => {
    onApplyFilters({ assunto: selectedOption1, orgao: selectedOption2, dataInicio: startDate, dataFim: endDate });
  };

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div style={{ height: '31px', borderRadius: '5px'}} className='bg-[#F2F2F2] dark:bg-escuro-2'>
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          placeholderText="Selecionar período"
          dateFormat="dd/MM/yyyy"
          isClearable
          className={`pl-[2dvh] pr-[2dvw] text-[1dvw] dark:text-claro-2 bg-transparent w-[180px] focus:outline-none font-bold`}
          style={getPlaceholderStyle(startDate)}
        />
      </div>

      <select
        value={selectedOption1}
        onChange={handleSelectChange1}
        className={`text-[1dvw] bg-transparent focus:outline-none font-bold bg-[#F2F2F2] dark:bg-escuro-2`}
        style={{
          height: '31px',
          width: '180px',
          borderRadius: '5px',
          paddingLeft: '6px',
          paddingBottom: '2px',
          color: selectedOption1 ? '#002776' : '#a9a9a9',
        }}
      >
        <option value="" disabled>
          Selecionar assunto
        </option>
        {tags.map((tag) => (
          <option key={tag.id_tag} value={tag.nome} style={{ color: '#002776' }}>
            {tag.nome}
          </option>
        ))}
      </select>

      <select
        value={selectedOption2}
        onChange={handleSelectChange2}
        className={`text-[1dvw] bg-transparent focus:outline-none font-bold bg-[#F2F2F2] dark:bg-escuro-2`}
        style={{
          height: '31px',
          width: '180px',
          borderRadius: '5px',
          paddingLeft: '6px',
          paddingBottom: '2px',
          color: selectedOption2 ? '#002776' : '#a9a9a9',
        }}
      >
        <option value="" disabled>
          Selecionar órgão
        </option>
        {reguladores.map((regulador, index) => (
          <option key={index} value={regulador} style={{ color: '#002776' }}>
            {regulador}
          </option>
        ))}
      </select>
      <button
        className="text-[1dvw] font-bold w-[70px] rounded-[5px] bg-azul-2 text-white ml-[20px] hover:bg-[#002886] hover:text-white"
        onClick={applyFilters}
      >
        Aplicar
      </button>
    </div>
  );
};

export default Dropdown;
