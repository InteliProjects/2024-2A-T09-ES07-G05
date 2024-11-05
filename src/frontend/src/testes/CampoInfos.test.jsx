import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import CampoInfos from "../components/CampoInfos";
import React from 'react';

describe("CampoInfos Component", () => {
  
  // Função para renderizar o componente com props dinâmicas
  const renderComponent = (props = {}) => {
    return render(<CampoInfos {...props} />);
  };

  it("deve renderizar o label e o value corretamente", () => {
    renderComponent({ label: "Nome", value: "João" });
    const labelElement = screen.getByText("Nome");
    const valueElement = screen.getByText("João");
    
    // Verificar se os textos são exibidos corretamente
    expect(labelElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });

  it("deve renderizar com classes e estilização corretas", () => {
    renderComponent({ label: "Endereço", value: "Rua A" });
    const container = screen.getByText("Endereço").parentElement;

    // Verificar se o componente possui as classes aplicadas corretamente
    expect(container).toHaveClass("flex bg-claro-1 shadow-sombra2 rounded-[1.2dvw]");
    expect(container).toHaveClass("w-[25dvw] items-center justify-between h-[3dvw] px-[1dvw]");
  });

  it("deve atualizar corretamente quando as props mudam", () => {
    const { rerender } = renderComponent({ label: "Telefone", value: "12345" });

    // Verificar a renderização inicial
    expect(screen.getByText("Telefone")).toBeInTheDocument();
    expect(screen.getByText("12345")).toBeInTheDocument();

    // Atualizar as props e verificar a nova renderização
    rerender(<CampoInfos label="Celular" value="67890" />);
    expect(screen.queryByText("Telefone")).not.toBeInTheDocument();
    expect(screen.getByText("Celular")).toBeInTheDocument();
    expect(screen.getByText("67890")).toBeInTheDocument();
  });
});
