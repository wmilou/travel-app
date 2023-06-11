import express from "express";
import { ViagemController } from "../controller/viagem.controller";
import { IInputComprarViagem } from "../model/IInputComprarViagem";


const path: string = "/viagem";

const controller = new ViagemController ({});

const server = express();

/**
 * @swagger
 *  paths:
 *  /viagem:
 *    get:
 *      tags:
 *        - Viagem
 *      summary: Busca todas as viagem
 *      description: Busca todas as viagem
 *      responses:
 *        200:
 *          description: Successful operation
 *          schema:
 *            type: object
 *            example:
 *               [
 *                  {
 *                    "id_viagem": 1,                                
 *                    "local": "PA",                               
 *                    "vagas": 5,                                
 *                    "local_partida": "Casa",                                
 *                    "hora_partida": "15:20",                                
 *                    "hora_volta": "22:20",                                
 *                    "imagem_1": "fotBDFBDFB",                                
 *                    "imagem_2": "BDFBDFBD",                                
 *                    "imagem_3": "njFBDFBDFkkjbk",                                
 *                    "viagem_cancelada": false                                
 *                  }
 *               ]
 *        422:
 *          description: Falha ao acessar DB
 */
server.get(`${path}`, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    try {
        return response.json(await controller.buscarTodasViagens());
    } catch (error) {
        response.send(error);
    }
});

/**
 * @swagger
 *  paths:
 *  /viagem/buscarUmaViagem:
 *    get:
 *      tags:
 *        - Viagem
 *      summary: Busca uma viagem especifica
 *      description: Busca uma viagem especifica
 *      parameters:
 *        - in: header
 *          name: id-viagem
 *          description: input id-viagem
 *          schema:
 *            type: number
 *            required:
 *              - id-viagem
 *            properties:
 *              id-viagem:
 *                type: number
 *      responses:
 *        200:
 *          description: Successful operation
 *          schema:
 *            type: object
 *            example:
 *               {
 *                 "id_viagem": 1,                                
 *                 "local": "PA",                             
 *                 "vagas": 5,                                
 *                 "local_partida": "Casa",                                
 *                 "hora_partida": "15:20",                                
 *                 "hora_volta": "22:20",                                
 *                 "imagem_1": "fotBDFBDFB",                                
 *                 "imagem_2": "BDFBDFBD",                                
 *                 "imagem_3": "njFBDFBDFkkjbk",                                
 *                 "viagem_cancelada": false                                
 *               } 
 *        422:
 *          description: Falha ao acessar DB
 */
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

/**
 * @swagger
 *  paths:
 *  /viagem:
 *    post:
 *      tags:
 *        - Viagem
 *      summary: Salva os dados da viagem
 *      description: Salva os dados da viagem
 *      parameters:
 *        - in: body
 *          name: input dados da viagem para salvar
 *          description: input dados da viagem para salvar
 *          schema:
 *            type: object
 *            required:
 *              - local
 *              - vagas
 *              - localPartida
 *              - horaPartida
 *              - horaVolta
 *              - imagem1
 *              - imagem2
 *              - imagem3
 *            properties:
 *              local:
 *                type: string
 *              vagas:
 *                type: number
 *              localPartida:
 *                type: string
 *              horaPartida:
 *                type: string
 *              horaVolta:
 *                type: string
 *              imagem1:
 *                type: string
 *              imagem2:
 *                type: string
 *              imagem3:
 *                type: string
 *      responses:
 *        200:
 *          description: Successful operation
 *          schema:
 *            type: object
 *            example:
 *               {
 *                 "idViagem": 1,                                
 *               } 
 *        422:
 *          description: Falha ao acessar DB
 */
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

/**
 * @swagger
 *  paths:
 *  /viagem:
 *    put:
 *      tags:
 *        - Viagem
 *      summary: Altera alguns dados da viagem
 *      description: Altera alguns dados da viagem
 *      parameters:
 *        - in: header
 *          name: id-viagem
 *          description: input id-viagem
 *          schema:
 *            type: number
 *            required:
 *              - id-viagem
 *            properties:
 *              id-viagem:
 *                type: number
 *        - in: body
 *          name: input dados de alteração
 *          description: input dados de alteração
 *          schema:
 *            type: object
 *            properties:
 *              vagas:
 *                type: number
 *              localPartida:
 *                type: string
 *              horaPartida:
 *                type: string
 *              horaVolta:
 *                type: string
 *              imagem1:
 *                type: string
 *              imagem2:
 *                type: string
 *              imagem3:
 *                type: string
 *      responses:
 *        200:
 *          description: Successful operation
 *          schema:
 *            type: object
 *            example:
 *               {
 *                 "idViagemAlterado": 1,                                
 *               } 
 *        422:
 *          description: Falha ao acessar DB
 */
server.put(`${path}`, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    try {
        if (request.body && request.headers["id-viagem"]) {
            return response.json(await controller.atualizarViagem(Number(request.headers["id-viagem"]), request.body));
        }

        return response.send("Dados faltantes...");
    } catch (error) {
        response.send(error);
    }
});

/**
 * @swagger
 *  paths:
 *  /viagem/cancelarViagem:
 *    put:
 *      tags:
 *        - Viagem
 *      summary: Cancela a viagem
 *      description: Cancela a viagem
 *      parameters:
 *        - in: header
 *          name: id-viagem
 *          description: input id-viagem
 *          schema:
 *            type: number
 *            required:
 *              - id-viagem
 *            properties:
 *              id-viagem:
 *                type: number
 *      responses:
 *        200:
 *          description: Successful operation
 *          schema:
 *            type: string
 *            example:
 *               "Viagem cancelada"
 *        422:
 *          description: Falha ao acessar DB
 */
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

/**
 * @swagger
 *  paths:
 *  /viagem/comprarViagem:
 *    post:
 *      tags:
 *        - Viagem
 *      summary: Compra um viagem / vincula uma viagem ao usuario
 *      description: Compra um viagem / vincula uma viagem ao usuario
 *      parameters:
 *        - in: header
 *          name: id-viagem
 *          description: input id-viagem
 *          schema:
 *            type: number
 *            required:
 *              - id-viagem
 *            properties:
 *              id-viagem:
 *                type: number
 *        - in: header
 *          name: id-usuario
 *          description: input id-usuario
 *          schema:
 *            type: number
 *            required:
 *              - id-usuario
 *            properties:
 *              id-usuario:
 *                type: number
 *        - in: body
 *          name: input dados de alteração
 *          description: input dados de alteração
 *          schema:
 *            type: object
 *            required:
 *              - formaDePagamento
 *              - qtdVagas
 *            properties:
 *              formaDePagamento:
 *                type: object
 *              qtdVagas:
 *                type: number
 *            example:
 *              {
 *                "formaDePagamento": {
 *                   "descricao": "cartâo"
 *                },
 *                "qtdVagas": 2                                
 *              } 
 *      responses:
 *        200:
 *          description: Successful operation
 *          schema:
 *            type: object
 *            example:
 *               {
 *                 "idViagemPessoa": 1                                
 *               } 
 *        422:
 *          description: Falha ao acessar DB
 */
server.post(`${path}/comprarViagem`, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    try {
        if (request.headers["id-viagem"] && request.headers["id-usuario"]) {
            const input: IInputComprarViagem = {
                idUsuario: Number(request.headers["id-usuario"]),
                idViagem: Number(request.headers["id-viagem"]),
                formaDePagamento: request.body.formaDePagamento,
                qtdVagas: request.body.qtdVagas,
            }

            return response.json(await controller.comprarViagem(input));
        }

        next();
    } catch (error) {
        response.send(error);
    }
});

/**
 * @swagger
 *  paths:
 *  /viagem/buscarViagemVinculadaAoUsuario:
 *    get:
 *      tags:
 *        - Viagem
 *      summary: Busca viagens vinculadas ao usuário
 *      description: Busca viagens vinculadas ao usuário
 *      parameters:
 *        - in: header
 *          name: id-usuario
 *          description: input id-usuario
 *          schema:
 *            type: number
 *            required:
 *              - id-usuario
 *            properties:
 *              id-usuario:
 *                type: number
 *      responses:
 *        200:
 *          description: Successful operation
 *          schema:
 *            type: array
 *            example:
 *               [
 *                  {
 *                    "viagem": {                            
 *                       "id_viagem": 1,                             
 *                       "local": "PA",                                                             
 *                       "local_partida": "Casa",                                
 *                       "hora_partida": "15:20",                                
 *                       "hora_volta": "22:20",                                
 *                       "imagem_1": "fotBDFBDFB",                                
 *                       "imagem_2": "BDFBDFBD",                                
 *                       "imagem_3": "njFBDFBDFkkjbk",                                
 *                       "viagem_cancelada": false  
 *                    },                                
 *                    "nomeUsuario": "Usuario Teste 2",                               
 *                    "idUsuario": 1                                                              
 *                  } 
 *               ] 
 *        422:
 *          description: Falha ao acessar DB
 */
server.get(`${path}/buscarViagemVinculadaAoUsuario`, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    try {
        if (request.headers["id-usuario"]) {
            return response.json(await controller.buscarViagemVinculadaAoUsuario(Number(request.headers["id-usuario"])));
        }

        next();
    } catch (error) {
        response.send(error);
    }
});


export default server;
