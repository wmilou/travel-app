"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPutService = void 0;
const client_1 = require("@prisma/client");
const user_get_service_1 = require("./user_get_service");
class UserPutService {
    prisma = new client_1.PrismaClient();
    UserGetService = new user_get_service_1.UserGetService();
    async updateUser(idUser, dataUpdate) {
        try {
            const user = await this.UserGetService.fetchOneUser(idUser);
            const updateUser = await this.prisma.pessoa.update({
                where: {
                    id_pessoa: idUser,
                },
                data: {
                    telefone: dataUpdate.telefone || user.telefone,
                    email: dataUpdate.email || user.email,
                    senha: dataUpdate.senha || user.senha
                },
            });
            return { idUsuarioAlterado: updateUser.id_pessoa };
        }
        catch (err) {
            throw err;
        }
    }
}
exports.UserPutService = UserPutService;
//# sourceMappingURL=user_put_service.js.map