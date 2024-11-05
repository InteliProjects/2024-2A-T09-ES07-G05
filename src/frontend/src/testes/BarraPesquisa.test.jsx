import { render, fireEvent, screen } from "@testing-library/react";
import BarraPesquisa from "../components/BarraPesquisa";
import '@testing-library/jest-dom';
import React from 'react';


describe("BarraPesquisa Component", () => {
    const mockOnSearch = jest.fn();
    const mockOnContagemFinalizada = jest.fn();

    const renderComponent = (props = {}) => {
        return render(
            <BarraPesquisa
                onSearch={mockOnSearch}
                transcricao=""
                iniciarContagem={false}
                duracao={5}
                onContagemFinalizada={mockOnContagemFinalizada}
                {...props}
            />
        );
    };

    it("deve renderizar o input com o placeholder correto", () => {
        renderComponent();
        const inputElement = screen.getByPlaceholderText("Digite uma regulamentação...");
        expect(inputElement).toBeInTheDocument();
    });

    it("deve atualizar o valor do input quando o usuário digitar", () => {
        renderComponent();
        const inputElement = screen.getByPlaceholderText("Digite uma regulamentação...");
        fireEvent.change(inputElement, { target: { value: "Nova pesquisa" } });
        expect(inputElement.value).toBe("Nova pesquisa");
    });

    it("deve chamar a função de pesquisa ao pressionar Enter", async () => {
        // Mock do fetch para simular a resposta do webhook
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve({}),
            })
        );
        
        renderComponent();
        
        const inputElement = screen.getByPlaceholderText("Digite uma regulamentação...");
        fireEvent.change(inputElement, { target: { value: "Nova pesquisa" } });
        fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });
        
        // Aguarda a chamada do mock de pesquisa
        await screen.findByPlaceholderText("Digite uma regulamentação...");
        
        expect(mockOnSearch).toHaveBeenCalledWith("Nova pesquisa");
        
        // Limpar o mock do fetch após o teste
        global.fetch.mockClear();
    });
    

    it("deve tornar a barra de pesquisa fixa ao rolar a página", () => {
        renderComponent();
        // Simular rolagem da página
        fireEvent.scroll(window, { target: { scrollY: 500 } });
        const barraPesquisa = screen.getByPlaceholderText("Digite uma regulamentação...").parentElement;
        expect(barraPesquisa).toHaveClass("fixed");
    });

    it("deve exibir o placeholder de contagem regressiva ao iniciar a contagem", () => {
        renderComponent({ iniciarContagem: true });
        const inputElement = screen.getByPlaceholderText("Começando a gravar em 5...");
        expect(inputElement).toBeInTheDocument();
    });

    it("deve atualizar a pesquisa quando uma transcrição é fornecida", () => {
        renderComponent({ transcricao: "Texto transcrito" });
        const inputElement = screen.getByPlaceholderText("Digite uma regulamentação...");
        expect(inputElement.value).toBe("Texto transcrito");
    });
});
