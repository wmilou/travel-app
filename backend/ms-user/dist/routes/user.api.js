"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controller/user.controller");
const login_controller_1 = require("../controller/login.controller");
const path = "/user";
const pathLogin = "/login";
const controller = new user_controller_1.UserController({});
const controllerLogin = new login_controller_1.LoginController({});
const server = (0, express_1.default)();
server.get(`${pathLogin}`, async (request, response, next) => {
    try {
        if (request.body && request.headers["id-user"]) {
            return response.json(await controllerLogin.login(request.body, Number(request.headers["id-user"])));
        }
        next();
    }
    catch (err) {
        return response.json(err);
    }
});
server.get(`${path}`, async (request, response) => {
    try {
        return response.json(await controller.fetchAllUsers());
    }
    catch (err) {
        return response.json(err);
    }
});
server.get(`${path}/uniqueUser`, async (request, response, next) => {
    try {
        if (request.headers["id-user"]) {
            return response.json(await controller.fetchOneUser(Number(request.headers["id-user"])));
        }
        next();
    }
    catch (err) {
        return response.json(err);
    }
});
server.post(`${path}`, async (request, response) => {
    try {
        if (request.body) {
            return response.json(await controller.registerUser(request.body));
        }
        return "Wrong datas";
    }
    catch (err) {
        return response.json(err);
    }
});
server.put(`${path}`, async (request, response) => {
    try {
        if (request.body && request.headers["id-user"]) {
            return response.json(await controller.updateUser(Number(request.headers["id-user"]), request.body));
        }
        return "Wrong datas";
    }
    catch (err) {
        return response.json(err);
    }
});
server.delete(`${path}`, async (request, response, next) => {
    try {
        if (request.headers["id-user"]) {
            return response.json(await controller.deleteUser(Number(request.headers["id-user"])));
        }
        next();
    }
    catch (err) {
        return response.json(err);
    }
});
exports.default = server;
//# sourceMappingURL=user.api.js.map