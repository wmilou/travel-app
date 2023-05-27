import { ILogin } from "../model/InputLogin";
import { LoginGetService } from "../service/login_services/login_get_service";
export declare class LoginController {
    private serviceGet;
    constructor({ serviceGet }: {
        serviceGet?: LoginGetService | undefined;
    });
    login(dataForLogin: ILogin, idUser: number): Promise<string>;
}
