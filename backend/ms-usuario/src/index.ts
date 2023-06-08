import express from "express";
import UsuarioApi from "./routes/usuario.api"
import { SwaggerApi } from "./routes/swagger.api";
import bodyParser from "body-parser";
import { enviroment } from "./config/environment";

const app = express();

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use("/", UsuarioApi);

new SwaggerApi().swagger(app);

const PORT = enviroment.port;

app.listen(PORT, function () {
    console.log(`Projeto rodando na porta ${PORT}`);
});