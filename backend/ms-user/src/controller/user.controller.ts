import { IDataForRegistration } from "../model/DataForRegistration";
import { UserGetService } from "../service/user_services/user_get_service";
import { UserPostService } from "../service/user_services/user_post_service";

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

    async registerUser(dataForRegistration: IDataForRegistration): Promise<object> {        
        return this.servicePost.registerUser(dataForRegistration);
    }
}