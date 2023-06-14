import express from "express";
import { UsuarioController } from "../controller/usuario.controller";
import { LoginController } from "../controller/login.controller";

const path: string = "/usuario";
const pathLogin: string = "/login";

const controller = new UsuarioController ({});
const controllerLogin = new LoginController ({});

const server = express();

/**
 * @swagger
 *  paths:
 *  /login:
 *    get:
 *      tags:
 *        - Login
 *      summary: Faz o login
 *      description: Faz o login
 *      parameters:
 *        - in: body
 *          name: login
 *          description: Faz o login com base no email e senha 
 *          schema:
 *            type: object
 *            required:
 *              - email
 *              - senha
 *            properties:
 *              email:
 *                type: string
 *              senha:
 *                type: string
 *      responses:
 *        200:
 *          description: Successful operation
 *          schema:
 *            type: array
 *            example:
 *              [
 *                  {
 *                      "id_pessoa": 2,
 *                      "nome": "string",
 *                      "dat_nasc": "string",
 *                      "rg": "string",
 *                      "cpf_cnpj": "123.123.123-00",
 *                      "telefone": "string",
 *                      "email": "string@gmail.com",
 *                      "senha": "string",
 *                      "ativo": true
 *                  }
 *              ]
 *        422:
 *          description: Falha ao acessar DB
 */
server.get(`${pathLogin}`, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    try {
        if (request.body) {
            return response.json(await controllerLogin.login(request.body));
        }

        next();
    } catch (error) {
        response.send(error);
    }
});

/**
 * @swagger
 *  paths:
 *  /usuario:
 *    get:
 *      tags:
 *        - Usuario
 *      summary: Mostra todos os usuarios
 *      description: Mostra todos os usuarios
 *      responses:
 *        200:
 *          description: Successful operation
 *          schema:
 *            type: array
 *            example:
 *             [
 *                {
 *                  "id_pessoa": 1,
 *                  "nome": "Usuario Teste 2",                 
 *                  "dat_nasc": "01/02/1244",                
 *                  "rg": "123443212",                 
 *                  "cpf_cnpj": "051.877.123-78",                 
 *                  "telefone": "12123456",                 
 *                  "email": "usuarioteste@gmail.com",                                 
 *                  "ativo": true                                 
 *                }    
 *             ]
 *        422:
 *          description: Falha ao acessar DB
 */
server.get(`${path}`, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    try {
        return response.json(await controller.buscarTodosUsuarios());
    } catch (error) {
        response.send(error);
    }
});

/**
 * @swagger
 *  paths:
 *  /usuario/buscarUsuarioUnico:
 *    get:
 *      tags:
 *        - Usuario
 *      summary: Busca um usuário unico
 *      description: Busca um usuário unico
 *      parameters:
 *        - in: header
 *          name: id-usuario
 *          description: Busca um usuário unico
 *          schema:
 *            type: string
 *            required:
 *              - id-usuario
 *            properties:
 *              id-usuario:
 *                type: number
 *      responses:
 *        200:
 *          description: Successful operation
 *          schema:
 *            type: object
 *            example:
 *               {
 *                 "id_pessoa": 1,
 *                 "nome": "Usuario Teste 2",                 
 *                 "dat_nasc": "01/02/1244",                
 *                 "rg": "123443212",                 
 *                 "cpf_cnpj": "051.877.123-78",                 
 *                 "telefone": "12123456",                 
 *                 "email": "usuarioteste@gmail.com",                                 
 *                 "ativo": true                                 
 *               }    
 *        422:
 *          description: Falha ao acessar DB
 */
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

/**
 * @swagger
 *  paths:
 *  /usuario:
 *    post:
 *      tags:
 *        - Usuario
 *      summary: Salva o usuário no DB
 *      description: Salva o usuário no DB
 *      parameters:
 *        - in: body
 *          name: input usuario
 *          description: input usuario
 *          schema:
 *            type: object
 *            required:
 *              - nome
 *              - dat_nasc
 *              - rg
 *              - cpf_cnpj
 *              - telefone
 *              - email
 *              - senha
 *            properties:
 *              nome:
 *                type: string
 *              dat_nasc:
 *                type: string
 *              rg:
 *                type: string
 *              cpf_cnpj:
 *                type: string
 *              telefone:
 *                type: string
 *              email:
 *                type: string
 *              senha:
 *                type: string
 *      responses:
 *        200:
 *          description: Successful operation
 *          schema:
 *            type: object
 *            example:
 *               {
 *                 "id_pessoa": 1,                                
 *               }    
 *        422:
 *          description: Falha ao acessar DB
 */
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

/**
 * @swagger
 *  paths:
 *  /usuario:
 *    put:
 *      tags:
 *        - Usuario
 *      summary: Altera o usuário no DB
 *      description: Altera o usuário no DB
 *      parameters:
 *        - in: header
 *          name: id-usuario
 *          description: Busca um usuário unico
 *          schema:
 *            type: string
 *            required:
 *              - id-usuario
 *            properties:
 *              id-usuario:
 *                type: number
 *        - in: body
 *          name: input usuario
 *          description: input usuario
 *          schema:
 *            type: object
 *            required:
 *              - telefone
 *              - email
 *              - senha
 *            properties:
 *              telefone:
 *                type: string
 *              email:
 *                type: string
 *              senha:
 *                type: string
 *      responses:
 *        200:
 *          description: Successful operation
 *          schema:
 *            type: object
 *            example:
 *               {
 *                 "idUsuarioAlterado": 1,                                
 *               }    
 *        422:
 *          description: Falha ao acessar DB
 */
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

/**
 * @swagger
 *  paths:
 *  /usuario/desativarOuAtivar:
 *    put:
 *      tags:
 *        - Usuario
 *      summary: Desativa o usuário no DB
 *      description: Desativa o usuário no DB
 *      parameters:
 *        - in: header
 *          name: id-usuario
 *          description: Desativa o usuário no DB
 *          schema:
 *            type: string
 *            required:
 *              - id-usuario
 *            properties:
 *              id-usuario:
 *                type: number
 *      responses:
 *        200:
 *          description: Successful operation
 *          schema:
 *            type: string
 *            example:
 *              "Usuário ativado OU Usuário desativado"
 *        422:
 *          description: Falha ao acessar DB
 */
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
