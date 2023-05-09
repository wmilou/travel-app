import { PrismaClient } from '@prisma/client'
import { IUser } from "../../model/User";

export class UserGetService {
    private prisma = new PrismaClient();

    async fetchAllUsers(): Promise<Array<IUser>> {
        try {            
            return this.prisma.pessoa.findMany();
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async fetchOneUser(idUsers: number): Promise<IUser> {
        try {            
            const user = await this.prisma.pessoa.findUnique({
                where: {
                    id_pessoa: idUsers,
                },
            });

            if (user) return user;

            throw "Usuário não encontrado"; 
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}