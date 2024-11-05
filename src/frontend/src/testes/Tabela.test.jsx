import { render, fireEvent, screen } from "@testing-library/react";
import Tabela from "../components/Tabela";
import '@testing-library/jest-dom';
import React from 'react';

describe("Tabela Component", () => {
    const mockData = [
        { nome: "Norma 1", data_expedicao: "2023-01-01", descricao: "Descrição 1", revogacao: false, orgao: "Orgão 1" },
        { nome: "Norma 2", data_expedicao: "2023-02-01", descricao: "Descrição 2", revogacao: true, orgao: "Orgão 2" },
        { nome: "Norma 3", data_expedicao: "2023-03-01", descricao: "Descrição 3", revogacao: false, orgao: "Orgão 3" },
    ];

    it("deve renderizar a tabela com os dados fornecidos", () => {
        render(<Tabela regulations={mockData} />);
        expect(screen.getByText("Norma 1")).toBeInTheDocument();
        expect(screen.getByText("Norma 2")).toBeInTheDocument();
        expect(screen.getByText("Norma 3")).toBeInTheDocument();
    });

    it("deve exibir a mensagem 'Nenhuma norma encontrada.' quando não há dados", () => {
        render(<Tabela regulations={[]} />);
        expect(screen.getByText("Nenhuma norma encontrada.")).toBeInTheDocument();
    });
});
