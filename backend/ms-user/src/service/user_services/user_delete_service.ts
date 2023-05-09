import { PrismaClient } from '@prisma/client'
import { UserGetService } from './user_get_service';

export class UserDeleteService {
    private prisma = new PrismaClient();
    private UserGetService = new UserGetService();

    async deleteUsers(idUser: number): Promise<boolean> {
        try {            
            const user = await this.UserGetService.fetchOneUser(idUser);
            
            if (user) {
                await this.prisma.pessoa.delete({
                    where: {
                      id_pessoa: idUser,
                    },
                });
                
                return true;
            }

            return false;
        } catch (err) {
            throw err;
        }
    }
}