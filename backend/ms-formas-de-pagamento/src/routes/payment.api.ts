import express from "express";
import { FormaDePagamentoController } from "../controller/payment.controller";

const path: string = "/formaDePagamento";

const controller = new FormaDePagamentoController ({});

const server = express();

/**
 * @swagger
 *  paths:
 *  /formaDePagamento:
 *    get:
 *      tags:
 *        - FormaDePagamento
 *      summary: Busca Todas Forma De Pagamento no DB
 *      description: Busca Todas Forma De Pagamento no DB
 *      responses:
 *        200:
 *          description: Successful operation
 *          schema:
 *            type: object
 *            example:
 *              [
 *                  {
 *                    "id_pagamento": 1,                                
 *                    "descricao": "pix"                                
 *                  }   
 *              ] 
 *        422:
 *          description: Falha ao acessar DB
 */
server.get(`${path}`, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    try {
        return response.json(await controller.buscarTodasFormasDePagamento());
    } catch (error) {
        response.send(error);
    }
});

/**
 * @swagger
 *  paths:
 *  /formaDePagamento/buscarUmaFormaPagamento:
 *    get:
 *      tags:
 *        - FormaDePagamento
 *      summary: Busca uma Forma De Pagamento especifica no DB
 *      description: Busca uma Forma De Pagamento especifica no DB
 *      parameters:
 *        - in: header
 *          name: id-formas-de-pagamento
 *          description: input id-formas-de-pagamento
 *          schema:
 *            type: number
 *            required:
 *              - id-formas-de-pagamento
 *            properties:
 *              id-formas-de-pagamento:
 *                type: number
 *      responses:
 *        200:
 *          description: Successful operation
 *          schema:
 *            type: object
 *            example:
 *               {
 *                 "id_pagamento": 1,                                
 *                 "descricao": "pix"                                
 *               }    
 *        422:
 *          description: Falha ao acessar DB
 */
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

/**
 * @swagger
 *  paths:
 *  /formaDePagamento:
 *    post:
 *      tags:
 *        - FormaDePagamento
 *      summary: Salva a Forma De Pagamento no DB
 *      description: Salva a Forma De Pagamento no DB
 *      parameters:
 *        - in: body
 *          name: input formaDePagamento
 *          description: input formaDePagamento
 *          schema:
 *            type: object
 *            required:
 *              - descricao
 *            properties:
 *              descricao:
 *                type: string
 *      responses:
 *        200:
 *          description: Successful operation
 *          schema:
 *            type: object
 *            example:
 *               {
 *                 "idFormaDePagamento": 1,                                
 *               }    
 *        422:
 *          description: Falha ao acessar DB
 */
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

/**
 * @swagger
 *  paths:
 *  /formaDePagamento:
 *    put:
 *      tags:
 *        - FormaDePagamento
 *      summary: Altera a descrição da Forma De Pagamento no DB
 *      description: Altera a descrição da Forma De Pagamento no DB
 *      parameters:
 *        - in: header
 *          name: id-formas-de-pagamento
 *          description: input id-formas-de-pagamento
 *          schema:
 *            type: number
 *            required:
 *              - id-formas-de-pagamento
 *            properties:
 *              id-formas-de-pagamento:
 *                type: number
 *        - in: body
 *          name: input formaDePagamento
 *          description: input formaDePagamento
 *          schema:
 *            type: object
 *            required:
 *              - descricao
 *            properties:
 *              descricao:
 *                type: string
 *      responses:
 *        200:
 *          description: Successful operation
 *          schema:
 *            type: object
 *            example:
 *               {
 *                 "idFormaDePagamentoAlterado": 1,                                
 *               } 
 *        422:
 *          description: Falha ao acessar DB
 */
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
