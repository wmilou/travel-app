import bodyParser from "body-parser"
import express from "express"
import { BookingController } from "../controller/booking.controller"


const path: string = "/booking";

const controller = new BookingController ({});

const server = express();

server.get(`${path}`, async (request: express.Request, response: express.Response) => {
    try {
        return response.json(controller.helloWorld());
    } catch (err) {
        console.error("err -> ", err);
    }
});

export default server;
