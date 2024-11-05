import React, { useEffect, useState } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tabela from '../components/Tabela';

describe('Tabela Component', () => {
  let regulations = [];

  beforeAll(async () => {
    const response = await fetch('http://127.0.0.1:8000/normas');
    regulations = await response.json();
  });

  test('deve renderizar as normas corretamente', async () => {
    render(<Tabela regulations={regulations} />);
    
    await waitFor(() => {
      expect(screen.getAllByText('Norma de Teste')[0]).toBeInTheDocument(); 
      expect(screen.getAllByText('Norma de Teste 2')[0]).toBeInTheDocument(); 
    });
  });

  test('deve abrir o modal ao clicar em uma linha da tabela', async () => {
    render(<Tabela regulations={regulations} />);
    
    await waitFor(() => {
      fireEvent.click(screen.getAllByText('Norma de Teste')[0]);
    });
    
    expect(screen.getByText('Expedição:')).toBeInTheDocument();
  });
});









