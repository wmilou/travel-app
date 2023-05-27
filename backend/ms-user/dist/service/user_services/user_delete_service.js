"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDeleteService = void 0;
const client_1 = require("@prisma/client");
const user_get_service_1 = require("./user_get_service");
class UserDeleteService {
    prisma = new client_1.PrismaClient();
    UserGetService = new user_get_service_1.UserGetService();
    async deleteUsers(idUser) {
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
        }
        catch (err) {
            throw err;
        }
    }
}
exports.UserDeleteService = UserDeleteService;
//# sourceMappingURL=user_delete_service.js.map