import { IInputViagem } from "../model/InputViagem";
import { ViagemPutService } from "../service/viagem_services/viagem_put_service";
import { ViagemGetService } from "../service/viagem_services/viagem_get_service";
import { ViagemPostService } from "../service/viagem_services/viagem_post_service";
import { ViagemDeleteService } from "../service/viagem_services/viagem_delete_service";
import { IInputAtualizarViagem } from "../model/InputAtualizarViagem";
import { IInputComprarViagem } from "../model/IInputComprarViagem";

export class ViagemController {
    private serviceGet: ViagemGetService;
    private servicePut: ViagemPutService;
    private servicePost: ViagemPostService;
    private serviceDelete: ViagemDeleteService;

    constructor({ serviceGet = new ViagemGetService(), servicePost = new ViagemPostService(), servicePut = new ViagemPutService(), serviceDelete = new ViagemDeleteService() }) 
    { 
        this.serviceGet = serviceGet;
        this.servicePost = servicePost; 
        this.servicePut = servicePut; 
        this.serviceDelete = serviceDelete; 
    }

    async buscarTodasViagens(): Promise<Array<any>> {        
        return this.serviceGet.buscarTodasViagem();
    }

    async buscarUmaViagem(idViagem: number): Promise<any> {        
        return await this.serviceGet.buscarUmaViagem(idViagem);
    }

    async criarViagem(inputViagem: IInputViagem): Promise<object> {        
        return this.servicePost.criarViagem(inputViagem);
    }

    async atualizarViagem(idViagem: number, inputAtualizarViagem: IInputAtualizarViagem): Promise<object> {        
        return this.servicePut.atualizarViagem(idViagem, inputAtualizarViagem);
    }

    async cancelarViagem(idViagem: number): Promise<string> {        
        return this.serviceDelete.cancelarViagem(idViagem);
    }

    async comprarViagem(inputComprarViagem: IInputComprarViagem): Promise<object> {
        return this.servicePost.comprarViagem(inputComprarViagem);
    }
    
    async buscarViagemVinculadaAoUsuario(idUsuario: number): Promise<object> {
        return this.serviceGet.buscarViagemVinculadaAoUsuario(idUsuario);
    }
}