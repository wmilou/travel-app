import { ILogin } from "../../model/InputLogin";
import { UsuarioGetService } from "../usuario_services/usuario_get_service";

export class LoginGetService {
    private UsuarioGetService = new UsuarioGetService();

    async login(dadosParaLogin: ILogin, idUsuario: number): Promise<string> {
        const usuario = await this.UsuarioGetService.buscarUmUsuario(idUsuario);
        const { email } = dadosParaLogin;
        const { senha } = dadosParaLogin;

        if (email === usuario.email && senha === usuario.senha) {
            return "Login realizado com sucesso!!";
        }

        return "Erro no login - usuário não encontrado";
    }
}