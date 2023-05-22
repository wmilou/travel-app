import { Viagem } from "@prisma/client"
import { IViagemPessoa } from "./IViagemPessoa"

export interface IViagem {
    id_viagem: number,
    local: string,
    vagas: number, 
    local_partida: string,
    hora_partida: string,
    hora_volta: string,
    imagem_1: string,
    imagem_2: string,   
    imagem_3: string,
    viagem_cancelada: boolean,
    viagem_pessoa: Array<IViagemPessoa>
}

