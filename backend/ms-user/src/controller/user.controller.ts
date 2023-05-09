import { IUser } from "../model/User";
import { IDataUpdate } from "../model/DataUpdate";
import { IDataForRegistration } from "../model/DataForRegistration";
import { UserPutService } from "../service/user_services/user_put_service";
import { UserGetService } from "../service/user_services/user_get_service";
import { UserPostService } from "../service/user_services/user_post_service";

export class UserController {
    private serviceGet: UserGetService;
    private servicePost: UserPostService;
    private servicePut: UserPutService;

    constructor({ serviceGet = new UserGetService(), servicePost = new UserPostService(), servicePut = new UserPutService() }) 
    { 
        this.serviceGet = serviceGet;
        this.servicePost = servicePost; 
        this.servicePut = servicePut; 
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

    async updateUser(idUser: number, dataUpdate: IDataUpdate): Promise<object> {        
        return this.servicePut.updateUser(idUser, dataUpdate);
    }
}