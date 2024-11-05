import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom'; 


class MockEventSource {
  constructor(url) {
    this.url = url;
    this.onmessage = null;
    this.onerror = null;
  }

  triggerMessage(data) {
    if (this.onmessage) {
      this.onmessage({ data: JSON.stringify(data) });
    }
  }

  triggerError(error) {
    if (this.onerror) {
      this.onerror(error);
    }
  }

  close() {
  }
}

global.EventSource = MockEventSource;

describe('App Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('renderização da logo', () => {
    render(<App />);
    const logoElement = screen.getByAltText(/logo/i);
    expect(logoElement).toBeInTheDocument();
  });

  test('deve exibir as regulamentações encontradas', async () => {
    render(<App />);

    const mockEventSource = new MockEventSource('http://127.0.0.1:8080/stream');
    mockEventSource.triggerMessage({ normas: [{ id: 1, nome: 'Regulamento 1' }] });

    const regulationElement = await screen.findByText(/Regulamentações novas nas últimas 24 horas/i);
    expect(regulationElement).toBeInTheDocument();
  });
});
20h55
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BarraPesquisa from '../components/BarraPesquisa';

describe('BarraPesquisa Component', () => {
  test('deve renderizar com o placeholder padrão', () => {
    render(<BarraPesquisa />);
    expect(screen.getByPlaceholderText('Digite uma regulamentação...')).toBeInTheDocument();
  });

  test('deve atualizar o valor do input quando o usuário digita', () => {
    render(<BarraPesquisa />);
    const input = screen.getByPlaceholderText('Digite uma regulamentação...');
    
    fireEvent.change(input, { target: { value: 'Nova Regulamentação' } });
    expect(input.value).toBe('Nova Regulamentação');
  });


});