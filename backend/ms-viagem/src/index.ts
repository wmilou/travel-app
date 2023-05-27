import express from "express";
import ViagemApi from "./routes/viagem.api"
import bodyParser from "body-parser";
import { enviroment } from "./config/environment";

const app = express();

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use("/", ViagemApi);

const PORT = enviroment.port;

app.listen(PORT, function () {
    console.log(`Projeto rodando na porta ${PORT}`);
});