import { IDataForRegistration } from "../model/DataForRegistration";
import { IUser } from "../model/User";
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

    async fetchAllUsers(): Promise<Array<IUser>> {        
        return this.serviceGet.fetchAllUsers();
    }

    async fetchOneUser(idUsers: number): Promise<IUser> {        
        return this.serviceGet.fetchOneUser(idUsers);
    }

    async registerUser(dataForRegistration: IDataForRegistration): Promise<object> {        
        return this.servicePost.registerUser(dataForRegistration);
    }
}