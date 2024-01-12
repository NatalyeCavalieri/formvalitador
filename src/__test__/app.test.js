import React from "react"
import { render, fireEvent, queryByText, screen } from "@testing-library/react"
import "@testing-library/jest-dom/matchers"
import { App } from "../App"

describe("Teste para o componente App", () => {
  test("Validação do formulário", () => {
    const { getByTestId, getByPlaceholderText } = render(<App />)

    fireEvent.change(screen.getByPlaceholderText("Full name"), {
      target: { value: "Natalye Silva" },
    })
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "john@doe.com" },
    })
    fireEvent.change(screen.getByPlaceholderText("Number phone"), {
      target: { value: "11959728253" },
    })
    fireEvent.change(screen.getByPlaceholderText("CEP"), {
      target: { value: "08696060" },
    })

    fireEvent.click(screen.getByText("Send"))

    expect(screen.queryByText("Digite seu nome")).toBeNull()
    expect(screen.queryByText("Digite um email válido")).toBeNull()
    expect(screen.queryByText("Digite um número de telefone válido")).toBeNull()
    expect(screen.queryByText("Digite um CEP válido")).toBeNull()
  })
})
