import { validateName, validateEmail, validatePhone, validateCep } from '../utils/regex'

describe("Tests for regular expression validations", () => {
  test("Name validation", () => {
    expect(validateName.test("Natalye Gaçalã")).toBeTruthy()
    expect(validateName.test("1234")).toBeFalsy()
    expect(validateName.test("Natalye12")).toBe(false)
  })

  test("Email validation", () => {
    expect(validateEmail.test("john@doe.com")).toBeTruthy()
    expect(validateEmail.test("john.com")).toBeFalsy()
    expect(validateEmail.test("john@gmail")).toBeFalsy()
    expect(validateEmail.test("john")).toBeFalsy()
  })

  test("Number phone validation", () => {
    expect(validatePhone.test("(11)959728253")).toBeTruthy()
    expect(validatePhone.test("11959728253")).toBeTruthy()
    expect(validatePhone.test("1195972-8253")).toBeTruthy()
    expect(validatePhone.test("(11)85972-8253")).toBeFalsy()
    expect(validatePhone.test("959728253")).toBeFalsy()
    expect(validatePhone.test("59728253")).toBeFalsy()
  })

  test("Postal code validation", () => {
    expect(validateCep.test("08696060")).toBeTruthy()
    expect(validateCep.test("08696-060")).toBeTruthy()
    expect(validateCep.test("123")).toBeFalsy()
  })
})

