import { ILogin } from "../model/InputLogin";
import { LoginGetService } from "../service/login_services/login_get_service";

export class LoginController {
    private serviceGet: LoginGetService;

    constructor({ serviceGet = new LoginGetService() }) 
    { 
        this.serviceGet = serviceGet; 
    }

    async login(dataForLogin: ILogin, idUser: number): Promise<string>  {
        return await this.serviceGet.login(dataForLogin, idUser);
    }
}


