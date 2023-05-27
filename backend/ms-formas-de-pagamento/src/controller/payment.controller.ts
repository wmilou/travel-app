import { IAtualizarFormasDePagamento } from "../model/IAtualizarFormasPagamento";
import { IInputFormaPagamento } from "../model/InputFormaPagamento";
import { FormaPagamentoGetService } from "../service/formaPagamento_service/formaPagamento_get_service"
import { FormaPagamentoPostService } from "../service/formaPagamento_service/formaPagamento_post_service"
import { FormaPagamentoPutService } from "../service/formaPagamento_service/formaPagamento_put_service"

export class FormaDePagamentoController {
    private serviceGet: FormaPagamentoGetService;
    private servicePost: FormaPagamentoPostService;
    private servicePut: FormaPagamentoPutService;

    constructor({ serviceGet = new FormaPagamentoGetService(), servicePost = new FormaPagamentoPostService(), servicePut = new FormaPagamentoPutService()}) 
    { 
        this.serviceGet = serviceGet;
        this.servicePost = servicePost; 
        this.servicePut = servicePut; 
    }

    async buscarTodasFormasDePagamento(): Promise<Array<any>> {        
        return this.serviceGet.buscarTodasFormasDePagamento();
    }

    async buscarUmaFormaPagamento(idFormaPagamento: number): Promise<any> {        
        return await this.serviceGet.buscarUmaFormaPagamento(idFormaPagamento);
    }

    async criarFormaPagamento(inputFormaPagamento: IInputFormaPagamento): Promise<object> {        
        return this.servicePost.criarFormaPagamento(inputFormaPagamento);
    }

    async atualizarFormaDePagamento(idFormaPagamento: number, inputAtualizarFormasDePagamento: IAtualizarFormasDePagamento): Promise<object> {        
        return this.servicePut.atualizarFormaDePagamento(idFormaPagamento, inputAtualizarFormasDePagamento);
    }
}