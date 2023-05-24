import { IInputFormaPagamento } from "./Forma_De_Pagamento/InputFormaPagamento"

export interface IInputViagem {
    local: string,
    vagas: number, 
    localPartida: string,
    horaPartida: string,
    horaVolta: string,
    imagem1: string,
    imagem2: string,
    imagem3: string,  
    idUsuario: number,
    formaDePagamento: IInputFormaPagamento
}
