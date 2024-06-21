import api from "./api";

export interface Usuario {
    id: string;
    email: string;
    password: string;
}
export async function getUsuarioByEmail(email: string): Promise<Usuario> {
    const response = await api.get(`/usuario`, { params: { email } });
    return response.data[0];
    
}