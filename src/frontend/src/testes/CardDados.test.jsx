import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import CardDados from "../components/CardDados";
import React from 'react';

describe("CardDados Component", () => {
  // Função para renderizar o componente com props dinâmicas
  const renderComponent = (props = {}) => {
    return render(<CardDados {...props} />);
  };

  it("deve renderizar o label e o dado corretamente sem borda", () => {
    renderComponent({ dado: 50, label: "Progresso", border: false });
    const dadoElement = screen.getByText("50");
    const labelElement = screen.getByText("Progresso");

    // Verifica se o valor e o label são exibidos corretamente
    expect(dadoElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
  });

  it("deve renderizar o dado formatado com '%' quando a prop 'border' é verdadeira", () => {
    renderComponent({ dado: 70, label: "Progresso", border: true });
    const dadoElement = screen.getByText("70%");

    // Verifica se o valor está formatado com o símbolo de porcentagem
    expect(dadoElement).toBeInTheDocument();
  });

  it("deve aplicar a borda verde se o valor do dado for maior ou igual a 85", () => {
    renderComponent({ dado: 90, label: "Desempenho", border: true });
    const container = screen.getByText("90%").parentElement;

    // Verifica se a classe de borda verde é aplicada corretamente
    expect(container).toHaveClass("border-green-500");
  });

  it("deve aplicar a borda amarela se o valor do dado estiver entre 65 e 84", () => {
    renderComponent({ dado: 70, label: "Desempenho", border: true });
    const container = screen.getByText("70%").parentElement;

    // Verifica se a classe de borda amarela é aplicada corretamente
    expect(container).toHaveClass("border-yellow-500");
  });

  it("deve aplicar a borda vermelha se o valor do dado for menor que 65", () => {
    renderComponent({ dado: 50, label: "Desempenho", border: true });
    const container = screen.getByText("50%").parentElement;

    // Verifica se a classe de borda vermelha é aplicada corretamente
    expect(container).toHaveClass("border-red-500");
  });

  it("deve renderizar corretamente sem borda quando 'border' é falso", () => {
    renderComponent({ dado: 50, label: "Progresso", border: false });
    const container = screen.getByText("50").parentElement;

    // Verifica se a classe 'border-none' é aplicada quando não há borda
    expect(container).toHaveClass("border-none");
  });

  it("deve renderizar corretamente quando o valor do dado é 0", () => {
    renderComponent({ dado: 0, label: "Progresso", border: true });
    const dadoElement = screen.getByText("0%");
    const container = dadoElement.parentElement;

    // Verifica se o valor 0% é renderizado corretamente
    expect(dadoElement).toBeInTheDocument();
    expect(container).toHaveClass("border-red-500"); // Borda vermelha para valor menor que 65
  });
});
