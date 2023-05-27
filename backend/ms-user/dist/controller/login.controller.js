"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const login_get_service_1 = require("../service/login_services/login_get_service");
class LoginController {
    serviceGet;
    constructor({ serviceGet = new login_get_service_1.LoginGetService() }) {
        this.serviceGet = serviceGet;
    }
    async login(dataForLogin, idUser) {
        return await this.serviceGet.login(dataForLogin, idUser);
    }
}
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map