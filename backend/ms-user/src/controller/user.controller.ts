import { UserService } from "../service/user_get_service";

export class UserController {
    private service: UserService;

    constructor({ service = new UserService() }) { this.service = service; }

    helloWorld(): string {
        return this.service.helloWord();
    }
}


