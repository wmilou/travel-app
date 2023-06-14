import { PrismaClient } from '@prisma/client'
import { FormaPagamentoGetService } from './formaPagamento_get_service';
import { IAtualizarFormasDePagamento } from '../../model/IAtualizarFormasPagamento';

export class FormaPagamentoPutService {
    private prisma = new PrismaClient();
    private FormaPagamentoGetService = new FormaPagamentoGetService();
    
    async atualizarFormaDePagamento(idFormaPagamento: number, inputAtualizarFormasDePagamento: IAtualizarFormasDePagamento): Promise<object> {
        try {
            const formaPagamento = await this.FormaPagamentoGetService.buscarUmaFormaPagamento(idFormaPagamento);

            const atualizarFormaDePagamento = await this.prisma.forma_pagamento.update({
                where: {
                  id_pagamento: idFormaPagamento,
                },
                data: {
                    descricao: inputAtualizarFormasDePagamento.descricao,
                },
              })
              
            return { idFormaDePagamentoAlterado: atualizarFormaDePagamento.id_pagamento };
        } catch (err) {
            throw err;
        }
    }
}