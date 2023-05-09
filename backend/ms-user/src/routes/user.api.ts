import bodyParser from "body-parser"
import express from "express"
import { UserController } from "../controller/user.controller"
import { LoginController } from "../controller/login.controller"

const path: string = "/user";
const pathLogin: string = "/login";

const controller = new UserController ({});
const controllerLogin = new LoginController ({});

const server = express();

server.get(`${pathLogin}`, async (request: express.Request, response: express.Response) => {
    try {
        return response.json(controllerLogin.login(request.body));
    } catch (err) {
        console.error("err -> ", err);
    }
});

server.get(`${path}`, async (request: express.Request, response: express.Response) => {
    try {
        return response.json(await controller.fetchAllUsers());
    } catch (err) {
        console.error("err -> ", err);
    }
});

server.get(`${path}/uniqueUser`, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    try {
        if (request.headers["id-user"]) {
            return response.json(await controller.fetchOneUser(Number(request.headers["id-user"])));
        }
    } catch (err) {
        console.error("err -> ", err);
    }
});

server.post(`${path}`, async (request: express.Request, response: express.Response) => {
    try {
        if (request.body) {
            return response.json(await controller.registerUser(request.body));
        }

        return "Wrong datas"
    } catch (err) {
        console.error("err -> ", err);
    }
});


export default server;
