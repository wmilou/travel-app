import { PrismaClient } from '@prisma/client'
import { ILogin } from "../../model/InputLogin";
import { IUsuario } from '../../model/Usuario';

export class LoginGetService {
    private prisma = new PrismaClient();

    async login(dadosParaLogin: ILogin): Promise<IUsuario | string> {
        try {
            const usuario = await this.prisma.pessoa.findMany({
                where: {
                    email: dadosParaLogin.email,
                },
            });
    
            if (usuario) {
                return usuario;
            }

            return "Erro no login - usuário não encontrado";
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}