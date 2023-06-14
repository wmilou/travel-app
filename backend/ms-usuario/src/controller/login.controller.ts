import { ILogin } from "../model/InputLogin";
import { LoginGetService } from "../service/login_services/login_get_service";
import { IUsuario } from '../model/Usuario';

export class LoginController {
    private serviceGet: LoginGetService;

    constructor({ serviceGet = new LoginGetService() }) 
    { 
        this.serviceGet = serviceGet; 
    }

    async login(dadosParaLogin: ILogin): Promise<IUsuario | string>  {
        return await this.serviceGet.login(dadosParaLogin);
    }
}


