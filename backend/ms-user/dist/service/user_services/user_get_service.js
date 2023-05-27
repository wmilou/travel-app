"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGetService = void 0;
const client_1 = require("@prisma/client");
class UserGetService {
    prisma = new client_1.PrismaClient();
    async fetchAllUsers() {
        try {
            console.log("Teste");
            return this.prisma.pessoa.findMany();
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    }
    async fetchOneUser(idUsers) {
        try {
            const user = await this.prisma.pessoa.findUnique({
                where: {
                    id_pessoa: idUsers,
                },
            });
            if (user)
                return user;
            throw "Usuário não encontrado";
        }
        catch (err) {
            throw err;
        }
    }
}
exports.UserGetService = UserGetService;
//# sourceMappingURL=user_get_service.js.map