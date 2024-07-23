import api from "../services/api";

export interface Usuario {  
    email: string;
    password: string;
}
export const  login = async (usuario: Usuario ): Promise<Usuario> => {
    console.log(usuario)
    const reponse = await api.post("auth/login", usuario);
    return reponse.data;

}
export default login