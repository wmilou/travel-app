"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_api_1 = __importDefault(require("./routes/user.api"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/", user_api_1.default);
// module.exports = app;
console.log("Teste 2");
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log(`Projeto rodando na porta ${PORT}`);
});
//# sourceMappingURL=index.js.map