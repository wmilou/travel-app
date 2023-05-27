import express from "express";
import { FormaDePagamentoController } from "../controller/payment.controller";

const path: string = "/formaDePagamento";

const controller = new FormaDePagamentoController ({});

const server = express();

server.get(`${path}`, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    try {
        return response.json(await controller.buscarTodasFormasDePagamento());
    } catch (error) {
        response.send(error);
    }
});

server.get(`${path}/buscarUmaFormaPagamento`, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    try {
        if (request.headers["id-formas-de-pagamento"]) {
            return response.json(await controller.buscarUmaFormaPagamento(Number(request.headers["id-formas-de-pagamento"])));
        }

        next();
    } catch (error) {
        response.send(error);
    }
});

server.post(`${path}`, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    try {
        if (request.body) {
            return response.json(await controller.criarFormaPagamento(request.body));
        }

        next();
    } catch (error) {
        response.send(error);
    }
});

server.put(`${path}`, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    try {
        if (request.body && request.headers["id-formas-de-pagamento"]) {
            return response.json(await controller.atualizarFormaDePagamento(Number(request.headers["id-formas-de-pagamento"]), request.body));
        }

        return response.send("Dados faltantes...");
    } catch (error) {
        response.send(error);
    }
});

export default server;
