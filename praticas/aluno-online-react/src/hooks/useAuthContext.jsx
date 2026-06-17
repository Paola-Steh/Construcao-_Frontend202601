import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

// essa função inteira é um "hook" > uma função personalizada para não ficar repetitiva no código
function useAuthContext() {
    return useContext(AuthContext);
}

export { useAuthContext };