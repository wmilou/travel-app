import { PrismaClient, Forma_pagamento } from '@prisma/client'

export class FormaPagamentoGetService {
    private prisma = new PrismaClient();

    async buscarTodasFormasDePagamento(): Promise<Array<Forma_pagamento>> {
        try {            
            const todasformaPagamento= await this.prisma.forma_pagamento.findMany();

            return todasformaPagamento;
        } catch (error) {
            throw error;
        }
    }

    async buscarUmaFormaPagamento(idFormasPagamento: number): Promise<Forma_pagamento> {
        try {            
            const formasPagamento = await this.prisma.forma_pagamento.findUnique({
                where: {
                    id_pagamento: idFormasPagamento,
                },
            });

            if (formasPagamento) {
                return formasPagamento;
            }    

            throw "Formas de Pagamento não encontrada"; 
        } catch (error) {
            throw error;
        }
    }
}