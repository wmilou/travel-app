export class LoginGetService {

    login(dataForLogin: object): string {

        const { email } = dataForLogin;
        const { password } = dataForLogin;

        if (email && password) {
            return "Login realizado com sucesso!!";
        }

        return "Erro no login - usuário não encontrado";
    }

}