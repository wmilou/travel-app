import { PrismaClient } from '@prisma/client'
import { IInputViagem } from '../../model/InputViagem';
import { UsuarioService } from '../usuario_services/usuario_get_service';
import { IViagem } from '../../model/IViagem';
import { IUsuario } from '../../model/Usuario/Usuario';
import { FormaPagamentoService } from '../forma_de_pagamento_services/formaPagamento_post_service';
import { ReturnFormaDePagamento } from '../../model/Forma_De_Pagamento/ReturnFormaDePagamento';
import { IInputComprarViagem } from '../../model/IInputComprarViagem';
import { ViagemGetService } from './viagem_get_service';
import { ViagemPutService } from './viagem_put_service';
import { IViagemPessoa } from '../../model/IViagemPessoa';


export class ViagemPostService {
    private ViagemGetService = new ViagemGetService();
    private ViagemPutService = new ViagemPutService();
    private prisma = new PrismaClient();
    
    async criarViagem(inputViagem: IInputViagem): Promise<object> {
        try {
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

            return { idViagem: viagem.id_viagem };
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    async criarViagemPessoa(viagem: IViagem, usuario: IUsuario, formaPagamento: ReturnFormaDePagamento): Promise<IViagemPessoa> {
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

    async comprarViagem(inputComprarViagem: IInputComprarViagem): Promise<object> {
        try {
            const usuario = await UsuarioService.retornarDadosDoUsuario(inputComprarViagem.idUsuario);
            const formaPagamento = await FormaPagamentoService.criarFormaPagamento(inputComprarViagem.formaDePagamento);
            const viagem = await this.ViagemGetService.buscarUmaViagem(inputComprarViagem.idViagem);

            const inputAtualizarVagas = {
                vagas: viagem.vagas - inputComprarViagem.qtdVagas,
            }

            await this.ViagemPutService.atualizarViagem(viagem.id_viagem, inputAtualizarVagas);

            const viagemPessoa = await this.criarViagemPessoa(viagem, usuario, formaPagamento);

            return {
                idViagemPessoa: viagemPessoa.id_viagem_pessoa
            };
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}