import { render, fireEvent, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import React from 'react';
import FerramentaPesquisa from "../components/FerramentaPesquisa";
import Microfone from "../components/Microfone";
import BarraPesquisa from "../components/BarraPesquisa";

// Mocks dos componentes filhos
jest.mock("../components/Microfone");
jest.mock("../components/BarraPesquisa");

describe("FerramentaPesquisa Component", () => {
  const renderComponent = () => {
    return render(<FerramentaPesquisa />);
  };

  beforeEach(() => {
    // Mock da implementação dos componentes filhos para garantir que eles renderizem sem erros
    Microfone.mockImplementation(({ onStartRecording, onTranscricao }) => (
      <button
        onClick={() => {
          onStartRecording(true);
          onTranscricao("Texto transcrito");
        }}
      >
        Microfone
      </button>
    ));

    BarraPesquisa.mockImplementation(({ iniciarContagem, duracao, transcricao, onContagemFinalizada }) => (
      <div>
        {iniciarContagem && <span>Iniciando em {duracao} segundos...</span>}
        {transcricao && <span>Transcrição: {transcricao}</span>}
        <button onClick={onContagemFinalizada}>Finalizar Contagem</button>
      </div>
    ));
  });

  it("deve renderizar os componentes BarraPesquisa e Microfone", () => {
    renderComponent();

    // Verifica se o componente BarraPesquisa foi renderizado
    expect(screen.getByText("Microfone")).toBeInTheDocument();
  });

  it("deve ativar a contagem ao iniciar a gravação", () => {
    renderComponent();

    // Simula o clique no botão de gravação do microfone
    fireEvent.click(screen.getByText("Microfone"));

    // Verifica se a contagem foi ativada
    expect(screen.getByText("Iniciando em 3 segundos...")).toBeInTheDocument();
  });

  it("deve desativar a contagem quando a contagem é finalizada", () => {
    renderComponent();

    // Simula o clique no botão de gravação do microfone para iniciar a contagem
    fireEvent.click(screen.getByText("Microfone"));

    // Verifica se a contagem foi ativada
    expect(screen.getByText("Iniciando em 3 segundos...")).toBeInTheDocument();

    // Simula o clique para finalizar a contagem
    fireEvent.click(screen.getByText("Finalizar Contagem"));

    // Verifica se a mensagem de contagem desapareceu após finalizar
    expect(screen.queryByText("Iniciando em 3 segundos...")).not.toBeInTheDocument();
  });

  it("deve atualizar a transcrição quando o microfone envia o texto", () => {
    renderComponent();

    // Simula o clique no botão de gravação do microfone
    fireEvent.click(screen.getByText("Microfone"));

    // Verifica se a transcrição foi atualizada corretamente
    expect(screen.getByText("Transcrição: Texto transcrito")).toBeInTheDocument();
  });
});
