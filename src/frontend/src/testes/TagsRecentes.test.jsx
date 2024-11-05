import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import React from 'react';
import TagsRecentes from "../components/TagsRecentes";

describe("TagsRecentes Component", () => {
    it("deve renderizar o título 'Assuntos Recentes'", () => {
        render(<TagsRecentes tag="Teste Tag" qtdNormas={5} />);
        const titleElement = screen.getByText("Assuntos Recentes");
        expect(titleElement).toBeInTheDocument();
    });

    it("deve exibir a tag e a quantidade de normas corretamente", () => {
        render(<TagsRecentes tag="Segurança" qtdNormas={10} />);
        const tagElement = screen.getByText("Segurança");
        const qtdElement = screen.getByText("10");

        expect(tagElement).toBeInTheDocument();
        expect(qtdElement).toBeInTheDocument();
    });

    it("deve exibir '1.' como o número de ordem para a tag", () => {
        render(<TagsRecentes tag="Teste Ordem" qtdNormas={3} />);
        const ordemElement = screen.getByText("1.");
        expect(ordemElement).toBeInTheDocument();
    });

    it("deve aplicar as classes de estilo corretamente no componente", () => {
        const { container } = render(<TagsRecentes tag="Teste Estilo" qtdNormas={7} />);
        const divElement = container.firstChild;

        expect(divElement).toHaveClass("flex flex-col bg-claro-2 p-[2dvw] shadow-sombra rounded-[1.5dvw] w-[40dvw] justify-start h-[37dvh] dark:bg-escuro-2");
    });
});
