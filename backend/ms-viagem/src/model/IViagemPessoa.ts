import { IInputViagem } from "./InputViagem"
import { IUsuario } from "./Usuario/Usuario"

export interface IViagemPessoa {
    id_viagem_pessoa: number, 
    pessoa: IUsuario,
    fk_pessoa: number,
    viagem: IInputViagem,
    fk_viagem: number,
    forma_pagamento: any, //  FormaPagamento 
    fk_forma_pag: any,
    sn_quitado: any
}