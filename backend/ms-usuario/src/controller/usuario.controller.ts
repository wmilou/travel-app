import { IUsuario } from "../model/Usuario";
import { IDadosParaAtualizar } from "../model/DadosParaAtualizar";
import { IDadosParaCriacao } from "../model/DadosParaCriacao";
import { UsuarioPutService } from "../service/usuario_services/usuario_put_service";
import { UsuarioGetService } from "../service/usuario_services/usuario_get_service";
import { UsuarioPostService } from "../service/usuario_services/usuario_post_service";
import { UsuarioDeleteService } from "../service/usuario_services/usuario_delete_service";
import { IUsuarioRetorno } from "../model/UsuariosRetorno";

export class UsuarioController {
    private serviceGet: UsuarioGetService;
    private servicePut: UsuarioPutService;
    private servicePost: UsuarioPostService;
    private serviceDelete: UsuarioDeleteService;

    constructor({ serviceGet = new UsuarioGetService(), servicePost = new UsuarioPostService(), servicePut = new UsuarioPutService(), serviceDelete = new UsuarioDeleteService() }) 
    { 
        this.serviceGet = serviceGet;
        this.servicePost = servicePost; 
        this.servicePut = servicePut; 
        this.serviceDelete = serviceDelete; 
    }

    async buscarTodosUsuarios(): Promise<Array<IUsuarioRetorno>> {        
        return this.serviceGet.buscarTodosUsuarios();
    }

    async buscarUmUsuario(idUsuarios: number): Promise<IUsuarioRetorno> {        
        const usuario = await this.serviceGet.buscarUmUsuario(idUsuarios);
        // @ts-ignore
        delete usuario.senha;

        return usuario;
    }

    async criarUsuario(dadosDeCriacao: IDadosParaCriacao): Promise<object> {        
        return this.servicePost.criarUsuario(dadosDeCriacao);
    }

    async atualizarUsuario(idUsuario: number, dadosDeAtualizacao: IDadosParaAtualizar): Promise<object> {        
        return this.servicePut.atualizarUsuario(idUsuario, dadosDeAtualizacao);
    }

    async desativarUsuario(idUsuario: number): Promise<string> {        
        return this.serviceDelete.desativarUsuario(idUsuario);
    }
}