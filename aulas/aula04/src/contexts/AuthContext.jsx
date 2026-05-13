import { createContext, useState } from "react";


// Cria o contexto
const AuthContext = createContext();

// cria o provedor
function AuthProvider({ children }) {
    const [logado, setLogado] = useState(false);
    const [usuario, setUsuario] = useState({});

    // chamar a API passando dados
    const login = (dados) => {
        setUsuario({ 
            id: 0, 
            nome: "Jose", 
            email: "jose@iesb.edu.br"});
        setLogado(true);
    };

    const logout = () => {
        setUsuario({});
        setLogado(false);
    };

    return (
        <AuthContext.Provider value={{ logado, usuario, login, logout }}> 
            {/* "value" é o estado compartilhado */}
            { children }
        </AuthContext.Provider>
    )
}



export { AuthContext, AuthProvider };
