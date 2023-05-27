import { PrismaClient } from '@prisma/client'
import { IInputFormaPagamento } from '../../model/Forma_De_Pagamento/InputFormaPagamento';
import { enviroment } from '../../config/environment';
import axios from 'axios';
import { ReturnFormaDePagamento } from '../../model/Forma_De_Pagamento/ReturnFormaDePagamento';

export class FormaPagamentoService {
    private prisma = new PrismaClient();
    
    public static async criarFormaPagamento(inputFormaPagamento: IInputFormaPagamento): Promise<ReturnFormaDePagamento> {
        try {
            const endpoint = `${enviroment.hostMSFormaDePagamento}/formaDePagamento`;

            const result = await axios({
                method: "post",
                url: endpoint,
                data: {
                    descricao: inputFormaPagamento.descricao,
                },
            });
    
            return result.data;
        } catch (error: any) {
            console.log(error);
            throw error;
        }
    }
}