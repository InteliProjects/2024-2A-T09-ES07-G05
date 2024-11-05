import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Tag from "../components/Tag";
import React from 'react';

describe("Tag Component", () => {
    it("deve renderizar o componente com o texto fornecido", () => {
        render(<Tag label="Tag de Teste" />);
        const textElement = screen.getByText("Tag de Teste");
        expect(textElement).toBeInTheDocument();
    });

    it("deve exibir o ícone de exclusão no botão", () => {
        render(<Tag label="Exemplo" />);
        const buttonElement = screen.getByRole("button");
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass("rounded-lg");
    });
});
