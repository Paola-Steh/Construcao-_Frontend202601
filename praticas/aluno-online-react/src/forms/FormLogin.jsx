import { useNavigate } from "react-router";
import { useAuthContext } from "../contexts/AuthContext";
import { useState } from "react";
import BotaoSubmit from "../components/BotaoSubmit";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";

function FormLogin() {

  const navigate = useNavigate();

  const { login } = useAuthContext();


 const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [emailErro, setEmailErro] = useState();
  const [senhaErro, setSenhaErro] = useState();

  const trataSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setEmailErro("Matrícula é obrigatório");
      return
    }

    if (!senha) {
      setSenhaErro("Senha é obrigatório");
      return
    }

      login({
      usuario: "paola@iesb.edu.br",
      senha: "123456",
    });

    navigate("/");
  };

  const mudaEmail = (e) => {
    setEmail(e.target.value);
    setEmailErro("");
  };

  const mudaSenha = (e) => {
    setSenha(e.target.value);
    setSenhaErro("");
  };

  return (
    <form onSubmit={trataSubmit}>
      <InputEmail
        error={emailErro}
        mudaValor={mudaEmail}
      />
      <InputSenha 
      error={senhaErro} 
      mudaValor={mudaSenha} 
      />
      <BotaoSubmit>Entrar</BotaoSubmit>
    </form>
  );
}

export default FormLogin;
