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
    fireEvent.change(screen.getByPlaceholderText("Postal code"), {
      target: { value: "08696060" },
    })

    fireEvent.click(screen.getByText("Send"))

    expect(
      screen.queryByText("Enter a valid name (up to 50 characters)")
    ).toBeNull()
    expect(screen.queryByText("Enter a valid email address")).toBeNull()
    expect(screen.queryByText("Enter a valid phone number")).toBeNull()
    expect(screen.queryByText("Enter a valid zip code")).toBeNull()
  })
})
