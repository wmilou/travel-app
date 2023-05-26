import express from "express";
import UserApi from "./routes/user.api"
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use("/", UserApi);

// module.exports = app;

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log(`Projeto rodando na porta ${PORT}`);
});
