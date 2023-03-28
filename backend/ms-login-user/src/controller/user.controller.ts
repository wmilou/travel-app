import { UserService } from "../service/user.service";

export class UserController {
    private service: UserService;

    constructor({ service = new UserService() }) { this.service = service; }

    helloWorld(): string {
        return this.service.helloWord();
    }
}