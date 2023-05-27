import express from "express";
import UsuarioApi from "./routes/usuario.api"
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));

app.use("/", UsuarioApi);

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log(`Projeto rodando na porta ${PORT}`);
});
