import { LoginGetService } from "../service/login_services/login_get_service";

export class LoginController {
    private serviceGet: LoginGetService;

    constructor({ serviceGet = new LoginGetService() }) 
    { 
        this.serviceGet = serviceGet; 
    }

    login(dataForLogin: object): string  {
        return this.serviceGet.login(dataForLogin);
    }
}


