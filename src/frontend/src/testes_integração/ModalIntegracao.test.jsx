import React, { useEffect, useState } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from '../components/Modal';

describe('Modal Component', () => {
  let dataSelect;

  beforeAll(async () => {
    const response = await fetch('http://127.0.0.1:8000/normas');
    const data = await response.json();
    
    dataSelect = data[0];
  });

  test('deve renderizar corretamente com o conteúdo fornecido', async () => {
    render(<Modal open={true} onClose={() => {}} content={dataSelect} />);

    expect(await screen.findByText(dataSelect.nome)).toBeInTheDocument();
    expect(screen.getByText('Expedição:')).toBeInTheDocument();
    expect(screen.getByText('Regulador:')).toBeInTheDocument();
  });

  test('deve fechar o modal ao clicar no botão de fechar', () => {
    const onCloseMock = jest.fn();
    render(<Modal open={true} onClose={onCloseMock} content={dataSelect} />);

    fireEvent.click(screen.getByRole('button', { name: 'close' }));
    
    expect(onCloseMock).toHaveBeenCalled();
  });
});