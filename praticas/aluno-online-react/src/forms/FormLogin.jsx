import { useState } from 'react'
import InputMatricula from '../components/InputMatricula'
import InputSenha from '../components/InputSenha'
import BotaoSubmit from '../components/BotaoSubmit'

function FormLogin() {
  const [matricula, setMatricula] = useState('')
  const [senha, setSenha] = useState('')
  const [matriculaErro, setMatriculaErro] = useState('')
  const [senhaErro, setSenhaErro] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    let formularioValido = true

    setMatriculaErro('')
    setSenhaErro('')

    if (!matricula.trim()) {
      setMatriculaErro('Matrícula é obrigatória')
      formularioValido = false
    }

    if (!senha.trim()) {
      setSenhaErro('Senha é obrigatória')
      formularioValido = false
    } else if (senha.length < 6) {
      setSenhaErro('A senha deve ter no mínimo 6 caracteres')
      formularioValido = false
    }

    if (formularioValido) {
      alert('Login realizado com sucesso!')
    }
  }

  function mudaMatricula(e) {
    setMatricula(e.target.value)
    setMatriculaErro('')
  }

  function mudaSenha(e) {
    setSenha(e.target.value)
    setSenhaErro('')
  }

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <InputMatricula
        value={matricula}
        onChange={mudaMatricula}
        error={matriculaErro}
      />

      <InputSenha
        value={senha}
        onChange={mudaSenha}
        error={senhaErro}
      />

      <BotaoSubmit>Entrar</BotaoSubmit>
    </form>
  )
}

export default FormLogin;