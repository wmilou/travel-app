import { Injectable } from "@angular/core";
import { IClient } from "../models/client.model";

@Injectable({
    providedIn: 'root'
})

export class ExportServices{
    constructor() {}
    
    client: IClient = {
        id: 0,
        nome: '',
        dat_nasc: '',
        rg: '00.000.000-00',
        cpf_cnpj: '000.000.000-00',
        telefone: '',
        email: '',
        senha: '',
    };


}