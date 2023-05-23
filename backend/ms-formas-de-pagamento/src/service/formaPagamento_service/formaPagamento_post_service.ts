import { PrismaClient } from '@prisma/client'
import { UsuarioService } from '../usuario_services/usuario_get_service';
import { IInputFormaPagamento } from '../../model/InputFormaPagamento';

export class FormaPagamentoPostService {
    private prisma = new PrismaClient();
    
    async criarFormaPagamento(inputFormaPagamento: IInputFormaPagamento): Promise<object> {
        try {
            // const usuario = await UsuarioService.retornarDadosDoUsuario(inputViagem.idUsuario);

            const forma_pagamento = await this.prisma.forma_pagamento.create({
                data: {       
                    descricao: inputFormaPagamento.descricao
                },
            });

            return { idFormaDePagamento: forma_pagamento.id_pagamento };
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
}