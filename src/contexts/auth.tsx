import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import { githubOauthLogin } from "../utils/githubLogin";

type User = {
    id: string;
    name: string;
    login: string;
    avatar_url: string;
}

type AuthContextData = {
    user: User | null; // Ou usuário existe ou não está autenticado
    signInUrl: string;
}

export const AuthContext = createContext({} as AuthContextData)

// Fazendo com que todos os componentes dentro do provider tenham acesso as informações do contexto

type AuthProvider = {
    children: ReactNode;
}

// Tipando o retorno da chamada para API
type AuthResponse = {
    token: string;
    user: {
        id: string;
        avatar_url: string;
        name: string;
        login: string;
    }
} 

export function AuthProvider({children}: AuthProvider){
    // State para armazenar o usuário
    const [user, setUser] = useState<User | null>(null)

    const signInUrl = githubOauthLogin

    async function signIn(githubCode: string){
        // Fazendo a requisição para a API e enviando o code para que seja retornado o TOKEN
        const response = await api.post<AuthResponse>('authenticate', {
            code: githubCode
        })

        // Pegando o token e os dados do usuário de formas separadas
        const {token, user} = response.data


        // Utilizando o localstorage
        localStorage.setItem('@dowhile:token', token)

        // Armazenando o usuário
        setUser(user)

    }

    useEffect(() => {
        // Verificando se existe o code= no link do usuário
        const url = window.location.href;
        const hasGithubCode = url.includes('?code=')

        // Caso exista, quer dizer que o login dele está valido
        if(hasGithubCode) {
            // Fazendo a separação da url "crua" e do código vindo do github
            const [urlWithoutCode, githubCode] = url.split('?code=')

            // Limpando a url. - RETIRANDO O CODE
            window.history.pushState({}, '', urlWithoutCode)
            signIn(githubCode)
        }

    },[])


    return(
        <AuthContext.Provider value={{signInUrl, user}}>
            {children}
        </AuthContext.Provider>
    )
}