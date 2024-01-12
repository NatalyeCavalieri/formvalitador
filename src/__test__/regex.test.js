import { validateName, validateEmail, validatePhone, validateCep } from '../utils/regex'

describe('Testes para expressões regulares de validações', ()=>{
  test('Validação de nome', ()=>{
    expect(validateName.test('Natalye Gaçalã')).toBeTruthy()
    expect(validateName.test("1234")).toBeFalsy()
  })

  test('Validação de email', ()=>{
    expect(validateEmail.test('john@doe.com')).toBeTruthy()
    expect(validateEmail.test('john.com')).toBeFalsy()
    expect(validateEmail.test('john@gmail')).toBeFalsy()
    expect(validateEmail.test('john')).toBeFalsy()
  })

  test('Validação do número de telefone', ()=>{
    expect(validatePhone.test('(11)959728253')).toBeTruthy()
    expect(validatePhone.test('11959728253')).toBeTruthy()
    expect(validatePhone.test("1195972-8253")).toBeTruthy()
    expect(validatePhone.test('959728253')).toBeFalsy()
    expect(validatePhone.test('59728253')).toBeFalsy()
  })

    test('Validação de CEP', ()=> {
      expect(validateCep.test('08696060')).toBeTruthy()
      expect(validateCep.test('08696-060')).toBeTruthy()
      expect(validateCep.test('123')).toBeFalsy()
    })



})
