import React, { createContext, useContext, useEffect, useState } from "react";

import { Usuario } from "../services/authService";

interface AuthContextProps {
    authenticated: boolean;
    usuario: Usuario;
    login(usuario: Usuario): void;
    logout: () => void
    isLoading: boolean;

}
const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const useAuth = () => useContext(AuthContext)

export const AuthProvider: React.FC = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [usuario, setUsuario] = useState({} as Usuario);
    const [isLoading, setIsLoading] = useState(true);

  
    useEffect(() => {
        const storedUsuario = localStorage.getItem('usuario');


        if (storedUsuario) {
            setUsuario(JSON.parse(storedUsuario));
            setAuthenticated(true);
        }
        setIsLoading(false);
    }, [])
      
     const login = (loggedInUsuario: Usuario) => {
        setUsuario(loggedInUsuario);
        setAuthenticated(true);
        localStorage.setItem('usuario', JSON.stringify(loggedInUsuario));
    }
    const logout = () => {
        setUsuario({} as Usuario);
        setAuthenticated(false);
        localStorage.removeItem('usuario');
    }


    return (
        <AuthContext.Provider
            value={{
                authenticated,
                usuario,
                login,
                 logout,
                isLoading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
