import express from "express";
import { UsuarioController } from "../controller/usuario.controller";
import { LoginController } from "../controller/login.controller";

const path: string = "/usuario";
const pathLogin: string = "/login";

const controller = new UsuarioController ({});
const controllerLogin = new LoginController ({});

const server = express();

server.get(`${pathLogin}`, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    try {
        if (request.body && request.headers["id-usuario"]) {
            return response.json(await controllerLogin.login(request.body, Number(request.headers["id-usuario"])));
        }

        next();
    } catch (error) {
        response.send(error);
    }
});

server.get(`${path}`, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    try {
        return response.json(await controller.buscarTodosUsuarios());
    } catch (error) {
        response.send(error);
    }
});

server.get(`${path}/buscarUsuarioUnico`, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    try {
        if (request.headers["id-usuario"]) {
            return response.json(await controller.buscarUmUsuario(Number(request.headers["id-usuario"])));
        }

        next();
    } catch (error) {
        response.send(error);
    }
});

server.post(`${path}`, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    try {
        if (request.body) {
            return response.json(await controller.criarUsuario(request.body));
        }

        next();
    } catch (error) {
        response.send(error);
    }
});

server.put(`${path}`, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    try {
        if (request.body && request.headers["id-usuario"]) {
            return response.json(await controller.atualizarUsuario(Number(request.headers["id-usuario"]), request.body,));
        }

        return response.send("Dados faltantes...");
    } catch (error) {
        response.send(error);
    }
});

server.put(`${path}/desativarOuAtivar`, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    try {
        if (request.headers["id-usuario"]) {
            return response.json(await controller.desativarUsuario(Number(request.headers["id-usuario"])));
        }

        next();
    } catch (error) {
        response.send(error);
    }
});


export default server;
