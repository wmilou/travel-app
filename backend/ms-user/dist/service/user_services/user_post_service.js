"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPostService = void 0;
const client_1 = require("@prisma/client");
class UserPostService {
    prisma = new client_1.PrismaClient();
    async registerUser(dataForRegistration) {
        try {
            const user = await this.prisma.pessoa.create({
                data: {
                    nome: dataForRegistration.nome,
                    dat_nasc: dataForRegistration.dat_nasc,
                    rg: dataForRegistration.rg,
                    cpf_cnpj: dataForRegistration.cpf_cnpj,
                    telefone: dataForRegistration.telefone,
                    email: dataForRegistration.email,
                    senha: dataForRegistration.senha,
                },
            });
            return { idUsuarioSalvo: user.id_pessoa };
        }
        catch (err) {
            throw err;
        }
    }
}
exports.UserPostService = UserPostService;
//# sourceMappingURL=user_post_service.js.map