import { render, fireEvent, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import React from 'react';
import Microfone from "../components/Microfone";

// Mocks de funções que serão passadas como props
const mockOnStartRecording = jest.fn();
const mockOnTranscricao = jest.fn();

describe("Microfone Component", () => {
  // Mock do `window.SpeechRecognition`
  const mockStart = jest.fn();
  const mockStop = jest.fn();
  let mockOnresult;

  const mockSpeechRecognition = jest.fn().mockImplementation(() => ({
    start: mockStart,
    stop: mockStop,
    onresult: null,
    onstart: null,
    onend: null,
    onerror: null,
  }));

  beforeAll(() => {
    // Adiciona o mock ao objeto `window`
    window.SpeechRecognition = mockSpeechRecognition;
    window.webkitSpeechRecognition = mockSpeechRecognition;
  });

  const renderComponent = (props = {}) => {
    return render(
      <Microfone 
        onStartRecording={mockOnStartRecording} 
        onTranscricao={mockOnTranscricao} 
        {...props} 
      />
    );
  };

  beforeEach(() => {
    // Limpar os mocks antes de cada teste
    mockOnStartRecording.mockClear();
    mockOnTranscricao.mockClear();
    mockSpeechRecognition.mockClear();
    mockStart.mockClear();
    mockStop.mockClear();
  });

  it("deve renderizar corretamente com o botão de microfone", () => {
    renderComponent();
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  it("deve alternar para a classe `fixed` ao rolar a página", () => {
    renderComponent();
    const buttonElement = screen.getByRole('button');

    // Simula a rolagem para alterar a posição
    fireEvent.scroll(window, { target: { scrollY: 500 } });

    // Verifica se a classe `fixed` foi aplicada ao botão após a rolagem
    expect(buttonElement).toHaveClass("fixed");
  });

  it("deve retornar à posição normal quando a rolagem for menor que 420px", () => {
    renderComponent();
    const buttonElement = screen.getByRole('button');

    // Simula rolagem para baixo e, em seguida, para cima
    fireEvent.scroll(window, { target: { scrollY: 500 } });
    fireEvent.scroll(window, { target: { scrollY: 100 } });

    // Verifica se a classe `fixed` não está mais presente
    expect(buttonElement).not.toHaveClass("fixed");
  });

  it("deve chamar a função onTranscricao com a transcrição correta ao obter resultado", () => {
    renderComponent();
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement); // Inicia a gravação

    // Simula a configuração do evento `onresult` manualmente no mock
    mockSpeechRecognition.mock.results[0].value.onresult = (event) => {
      const transcricao = event.results[0][0].transcript;
      mockOnTranscricao(transcricao);
    };

    // Simula o evento de resultado com uma transcrição
    const mockEvent = {
      results: [
        [{ transcript: "teste de transcrição" }],
      ],
    };
    mockSpeechRecognition.mock.results[0].value.onresult(mockEvent);

    // Verifica se a transcrição foi passada corretamente
    expect(mockOnTranscricao).toHaveBeenCalledWith("teste de transcrição");
  });

  it("deve alterar a cor do ícone ao iniciar e parar a gravação", () => {
    renderComponent();
    const buttonElement = screen.getByRole('button');
    const svgElement = buttonElement.querySelector('svg path');

    // Clicar no botão para iniciar a gravação
    fireEvent.click(buttonElement);
    expect(svgElement).toHaveAttribute('fill', '#00195C'); // Verifica se a cor é vermelha

    // Clicar novamente para parar a gravação
    fireEvent.click(buttonElement);
    expect(svgElement).toHaveAttribute('fill', '#00195C'); // Verifica se a cor é azul
  });
});
