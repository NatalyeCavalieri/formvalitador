import { useState } from "react"
import "./styles.css"
import {
  validateName,
  validateEmail,
  validatePhone,
  validateCep,
} from "./utils/regex"

export function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [cep, setCep] = useState("")

  const [nameErr, setNameErr] = useState(false)
  const [emailErr, setEmailErr] = useState(false)
  const [phoneErr, setPhoneErr] = useState(false)
  const [cepErr, setCepErr] = useState(false)

  const validate = (event) => {
    event.preventDefault()

    if (!validateName.test(name)) {
      setNameErr(true)
    } else {
      setNameErr(false)
    }

    if (!validateEmail.test(email)) {
      setEmailErr(true)
    } else {
      setEmailErr(false)
    }

    if (!validatePhone.test(phone)) {
      setPhoneErr(true)
    } else {
      setPhoneErr(false)
    }

    if (!validateCep.test(cep)) {
      setCepErr(true)
    } else {
      setCepErr(false)
    }
  }
  console.log({ name, email, phone, cep })
  return (
    <div id="app">
      <h1>Validator</h1>
      <form>
        <input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        {nameErr && <p>Digite seu nome</p>}

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        {emailErr && <p>Digite um email válido</p>}

        <input
          type="text"
          placeholder="Number phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        ></input>
        {phoneErr && <p>Digite um número de telefone válido</p>}

        <input
          type="number"
          placeholder="CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        ></input>
        {cepErr && <p>Digite um CEP válido</p>}

        <button onClick={validate}>Send</button>
      </form>
    </div>
  )
}

export default App
