import { Usuario, getUsuarioByEmail } from "./usuarioService";

export async function login(email: string, password: string): Promise<Usuario> {
    const Usuario = await getUsuarioByEmail(email);


    if(Usuario && Usuario.password === password) {
        return Usuario;
    }
    else{
        throw new Error ("Invalido password");

    }

}