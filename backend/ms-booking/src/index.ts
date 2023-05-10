import express from "express";
import PaymentApi from "./routes/booking.api"
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use("/", PaymentApi);

// module.exports = app;

const PORT = process.env.PORT || 3002;

app.listen(PORT, function () {
    console.log(`Projeto rodando na porta ${PORT}`);
});