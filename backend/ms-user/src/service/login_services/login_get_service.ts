import { ILogin } from "../../model/InputLogin";
import { UserGetService } from "../user_services/user_get_service";

export class LoginGetService {
    private UserGetService = new UserGetService();

    async login(dataForLogin: ILogin, idUser: number): Promise<string> {
        const user = await this.UserGetService.fetchOneUser(idUser);
        const { email } = dataForLogin;
        const { senha } = dataForLogin;

        if (email === user.email && senha === user.senha) {
            return "Login realizado com sucesso!!";
        }

        return "Erro no login - usuário não encontrado";
    }
}