import express from "express";
import { UserController } from "../controller/user.controller";
import { LoginController } from "../controller/login.controller";

const path: string = "/user";
const pathLogin: string = "/login";

const controller = new UserController ({});
const controllerLogin = new LoginController ({});

const server = express();

server.get(`${pathLogin}`, async (request: express.Request, response: express.Response) => {
    try {
        return response.json(controllerLogin.login(request.body));
    } catch (err) {
        return response.json(err);
    }
});

server.get(`${path}`, async (request: express.Request, response: express.Response) => {
    try {
        return response.json(await controller.fetchAllUsers());
    } catch (err) {
        return response.json(err);
    }
});

server.get(`${path}/uniqueUser`, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    try {
        if (request.headers["id-user"]) {
            return response.json(await controller.fetchOneUser(Number(request.headers["id-user"])));
        }

        next();
    } catch (err) {
        return response.json(err);
    }
});

server.post(`${path}`, async (request: express.Request, response: express.Response) => {
    try {
        if (request.body) {
            return response.json(await controller.registerUser(request.body));
        }

        return "Wrong datas"
    } catch (err) {
        return response.json(err);
    }
});

server.put(`${path}`, async (request: express.Request, response: express.Response) => {
    try {
        if (request.body && request.headers["id-user"]) {
            return response.json(await controller.updateUser(Number(request.headers["id-user"]), request.body,));
        }

        return "Wrong datas"
    } catch (err) {
        return response.json(err);
    }
});

server.delete(`${path}`, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    try {
        if (request.headers["id-user"]) {
            return response.json(await controller.deleteUser(Number(request.headers["id-user"])));
        }

        next();
    } catch (err) {
        return response.json(err);
    }
});


export default server;
