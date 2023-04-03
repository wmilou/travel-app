import { UserGetService } from "../service/user_get_service";
import { UserPostService } from "../service/user_post_service";

export class UserController {
    private serviceGet: UserGetService;
    private servicePost: UserPostService;

    constructor({ serviceGet = new UserGetService(), servicePost = new UserPostService() }) 
    { 
        this.serviceGet = serviceGet;
        this.servicePost = servicePost; 
    }

    helloWorld(): string {
        return this.serviceGet.helloWord();
    }

    registerUser(dataForRegistration: object): string {
        return this.servicePost.registerUser(dataForRegistration);
    }


}


