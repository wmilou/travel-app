import bodyParser from "body-parser"
import express from "express"
import { PaymentController } from "../controller/payment.controller"


const path: string = "/payment";

const controller = new PaymentController ({});

const server = express();

server.get(`${path}`, async (request: express.Request, response: express.Response) => {
    try {
        return response.json(controller.helloWorld());
    } catch (err) {
        console.error("err -> ", err);
    }
});

export default server;
