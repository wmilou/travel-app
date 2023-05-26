import { IInputFormaPagamento } from "./Forma_De_Pagamento/InputFormaPagamento";

export interface IInputComprarViagem {
    idUsuario: number,
    idViagem: number,
    formaDePagamento: IInputFormaPagamento;
    qtdVagas: number;
}