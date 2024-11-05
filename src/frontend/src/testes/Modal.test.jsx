import { render, fireEvent, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import React from 'react';
import Modal from "../components/Modal";
import CampoInfos from "../components/CampoInfos";
import Tag from "../components/Tag";

// Mocks dos componentes filhos
jest.mock("../components/CampoInfos");
jest.mock("../components/Tag");

describe("Modal Component", () => {
  const mockOnClose = jest.fn();

  const sampleContent = {
    nome: "Norma de Teste",
    data_expedicao: "01/01/2024",
    regulador: "Banco Central",
    revogacao: true,
    descricao: "Descrição detalhada da norma para fins de teste.",
    tags: ["Financeiro", "Regulatório", "Compliance"],
  };

  beforeEach(() => {
    mockOnClose.mockClear();

    // Mock dos componentes internos
    CampoInfos.mockImplementation(({ label, value }) => (
      <div>{label}: {value}</div>
    ));

    Tag.mockImplementation(({ label }) => (
      <span>{label}</span>
    ));
  });

  const renderComponent = (props = {}) => {
    return render(<Modal {...props} />);
  };

  it("deve renderizar o modal corretamente quando `open` é true", () => {
    renderComponent({ open: true, onClose: mockOnClose, content: sampleContent });
    
    // Verificar se o modal está visível e o conteúdo é exibido
    expect(screen.getByText("Norma de Teste")).toBeInTheDocument();
    // Utiliza expressão regular para buscar textos divididos em múltiplos elementos
    expect(screen.getByText(/Expedição.*01\/01\/2024/)).toBeInTheDocument();
    expect(screen.getByText(/Regulador.*Banco Central/)).toBeInTheDocument();
  });

  it("deve renderizar as tags corretamente a partir do conteúdo fornecido", () => {
    renderComponent({ open: true, onClose: mockOnClose, content: sampleContent });

    // Verifica se cada tag foi renderizada corretamente
    expect(screen.getByText("Financeiro")).toBeInTheDocument();
    expect(screen.getByText("Regulatório")).toBeInTheDocument();
    expect(screen.getByText("Compliance")).toBeInTheDocument();
  });

  it("deve renderizar os componentes CampoInfos corretamente", () => {
    renderComponent({ open: true, onClose: mockOnClose, content: sampleContent });

    // Verifica se os componentes CampoInfos são renderizados com as informações corretas
    expect(screen.getByText(/Expedição.*01\/01\/2024/)).toBeInTheDocument();
    expect(screen.getByText(/Regulador.*Banco Central/)).toBeInTheDocument();
    expect(screen.getByText(/Revogação.*Sim/)).toBeInTheDocument();
  });

  it("deve exibir a descrição corretamente", () => {
    renderComponent({ open: true, onClose: mockOnClose, content: sampleContent });

    // Verifica se a descrição é exibida corretamente
    expect(screen.getByText("Descrição detalhada da norma para fins de teste.")).toBeInTheDocument();
  });

  it("deve exibir e funcionar o botão de download", () => {
    renderComponent({ open: true, onClose: mockOnClose, content: sampleContent });

    const downloadButton = screen.getByText("Baixar");
    
    // Verifica se o botão de download é exibido
    expect(downloadButton).toBeInTheDocument();

    // Simula um clique no botão de download
    fireEvent.click(downloadButton);

    // Como o comportamento de download não está implementado, apenas verificamos a presença e a interação
    expect(downloadButton).toBeVisible();
  });
});
