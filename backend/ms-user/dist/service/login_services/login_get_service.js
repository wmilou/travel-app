"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginGetService = void 0;
const user_get_service_1 = require("../user_services/user_get_service");
class LoginGetService {
    UserGetService = new user_get_service_1.UserGetService();
    async login(dataForLogin, idUser) {
        const user = await this.UserGetService.fetchOneUser(idUser);
        const { email } = dataForLogin;
        const { senha } = dataForLogin;
        if (email === user.email && senha === user.senha) {
            return "Login realizado com sucesso!!";
        }
        return "Erro no login - usuário não encontrado";
    }
}
exports.LoginGetService = LoginGetService;
//# sourceMappingURL=login_get_service.js.map