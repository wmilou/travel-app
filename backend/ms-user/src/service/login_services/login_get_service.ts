export class LoginGetService {

    login(dataForLogin: object): string {

        // @ts-ignore
        const { email } = dataForLogin;
        // @ts-ignore
        const { password } = dataForLogin;

        if (email && password) {
            return "Login realizado com sucesso!!";
        }

        return "Erro no login - usuário não encontrado";
    }

}