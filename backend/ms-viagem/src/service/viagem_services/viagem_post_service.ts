import { PrismaClient } from '@prisma/client'
import { IInputViagem } from '../../model/InputViagem';
import { UsuarioService } from '../usuario_services/usuario_get_service';
import { IViagem } from '../../model/IViagem';
import { IUsuario } from '../../model/Usuario/Usuario';
import { FormaPagamentoService } from '../forma_de_pagamento_services/formaPagamento_post_service';
import { ReturnFormaDePagamento } from '../../model/Forma_De_Pagamento/ReturnFormaDePagamento';

export class ViagemPostService {
    private prisma = new PrismaClient();
    
    async criarViagem(inputViagem: IInputViagem): Promise<object> {
        try {
            const usuario = await UsuarioService.retornarDadosDoUsuario(inputViagem.idUsuario);
            const formaPagamento = await FormaPagamentoService.criarFormaPagamento(inputViagem.formaDePagamento);
            console.log(formaPagamento)

            const viagem = await this.prisma.viagem.create({
                data: {       
                    local: inputViagem.local,
                    vagas: inputViagem.vagas,
                    local_partida: inputViagem.localPartida,                          
                    hora_partida: inputViagem.horaPartida,
                    hora_volta: inputViagem.horaVolta,
                    imagem_1: inputViagem.imagem1 || "",  
                    imagem_2: inputViagem.imagem2,
                    imagem_3: inputViagem.imagem3,
                    viagem_cancelada: false
                },
            });

            await this.criarViagemPessoa(viagem, usuario, formaPagamento);

            return { idViagem: viagem.id_viagem };
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    async criarViagemPessoa(viagem: IViagem, usuario: IUsuario, formaPagamento: ReturnFormaDePagamento): Promise<object> {
        try {
            const viagemPessoa = await this.prisma.viagem_pessoa.create({
                data: {
                    fk_viagem: viagem.id_viagem,
                    fk_pessoa: usuario.id_pessoa,
                    fk_forma_pag: formaPagamento.idFormaDePagamento,
                }
            });

            return viagemPessoa;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}