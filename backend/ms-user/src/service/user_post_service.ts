export class UserPostService {

    registerUser(dataForRegistration: object): any {
        console.log(dataForRegistration);
        return `usuario salvo!! -> ${dataForRegistration}`;
    }
}