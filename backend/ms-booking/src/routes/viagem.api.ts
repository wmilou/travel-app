import express from "express";
import { ViagemController } from "../controller/viagem.controller";

const path: string = "/viagem";

const controller = new ViagemController ({});

const server = express();

server.get(`${path}`, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    try {
        return response.json(await controller.buscarTodasViagens());
    } catch (error) {
        response.send(error);
    }
});

server.get(`${path}/buscarUmaViagem`, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    try {
        if (request.headers["id-viagem"]) {
            return response.json(await controller.buscarUmaViagem(Number(request.headers["id-viagem"])));
        }

        next();
    } catch (error) {
        response.send(error);
    }
});

server.post(`${path}`, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    try {
        if (request.body) {
            return response.json(await controller.criarViagem(request.body));
        }

        next();
    } catch (error) {
        response.send(error);
    }
});

server.put(`${path}`, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    try {
        if (request.body && request.headers["id-usuario"]) {
            return response.json(await controller.atualizarViagem(Number(request.headers["id-viagem"]), request.body,));
        }

        return response.send("Dados faltantes...");
    } catch (error) {
        response.send(error);
    }
});

server.put(`${path}/cancelarViagem`, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    try {
        if (request.headers["id-viagem"]) {
            return response.json(await controller.cancelarViagem(Number(request.headers["id-viagem"])));
        }

        next();
    } catch (error) {
        response.send(error);
    }
});


export default server;
