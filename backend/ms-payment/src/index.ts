import express from "express";
import PaymentApi from "./routes/payment.api"
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use("/", PaymentApi);

// module.exports = app;

const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
    console.log(`Projeto rodando na porta ${PORT}`);
});