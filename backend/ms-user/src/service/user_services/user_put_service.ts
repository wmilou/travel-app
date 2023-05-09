import { PrismaClient } from '@prisma/client'
import { IDataUpdate } from '../../model/DataUpdate';
import { UserGetService } from './user_get_service';

export class UserPutService {
    private prisma = new PrismaClient();
    private getUser = new UserGetService();
    
    async updateUser(idUser: number, dataUpdate: IDataUpdate): Promise<object> {
        try {
            const user = await this.getUser.fetchOneUser(idUser);

            const updateUser = await this.prisma.pessoa.update({
                where: {
                  id_pessoa: idUser,
                },
                data: {
                    telefone: dataUpdate.telefone || user.telefone,
                    email: dataUpdate.email || user.email,
                    senha: dataUpdate.senha || user.senha
                },
              })
              
            return { idUsuarioAlterado: updateUser.id_pessoa };
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}