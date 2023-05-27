import { PrismaClient } from '@prisma/client'
import { IUsuario } from "../../model/Usuario";
import { IUsuarioRetorno } from '../../model/UsuariosRetorno';

export class UsuarioGetService {
    private prisma = new PrismaClient();

    async buscarTodosUsuarios(): Promise<Array<IUsuarioRetorno>> {
        try {            
            const todosUsuario = await this.prisma.pessoa.findMany();

            const usuarios: Array<IUsuarioRetorno> = todosUsuario.map((usuario: IUsuario) => {
                // @ts-ignore
                delete usuario.senha;
                
                return usuario;
            });

            return usuarios;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async buscarUmUsuario(idUsuarios: number): Promise<IUsuario> {
        try {            
            const usuario = await this.prisma.pessoa.findUnique({
                where: {
                    id_pessoa: idUsuarios,
                },
            });

            if (usuario) {
                return usuario;
            }    

            throw "Usuário não encontrado"; 
        } catch (error) {
            throw error;
        }
    }
}