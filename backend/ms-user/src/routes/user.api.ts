import bodyParser from "body-parser"
import express from "express"
import { UserController } from "../controller/user.controller"

const path: string = "/user";

const controller = new UserController ({});

const server = express();

server.get(`${path}`, async (request: express.Request, response: express.Response) => {
    try {
        return response.json(controller.helloWorld());
    } catch (err) {
        console.error("err -> ", err);
    }
});

server.post(`${path}`, async (request: express.Request, response: express.Response) => {
    try {
        if (request.body) {
            return response.json(controller.registerUser(request.body));
        }

        return "Wrong datas"
    } catch (err) {
        console.error("err -> ", err);
    }
});


export default server;
