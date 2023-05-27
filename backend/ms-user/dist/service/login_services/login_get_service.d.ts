import { ILogin } from "../../model/InputLogin";
export declare class LoginGetService {
    private UserGetService;
    login(dataForLogin: ILogin, idUser: number): Promise<string>;
}
