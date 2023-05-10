import { IUser } from "../model/User";
import { IDataUpdate } from "../model/DataUpdate";
import { IDataForRegistration } from "../model/DataForRegistration";
import { UserPutService } from "../service/user_services/user_put_service";
import { UserGetService } from "../service/user_services/user_get_service";
import { UserPostService } from "../service/user_services/user_post_service";
import { UserDeleteService } from "../service/user_services/user_delete_service";

export class UserController {
    private serviceGet: UserGetService;
    private servicePut: UserPutService;
    private servicePost: UserPostService;
    private serviceDelete: UserDeleteService;

    constructor({ serviceGet = new UserGetService(), servicePost = new UserPostService(), servicePut = new UserPutService(), serviceDelete = new UserDeleteService() }) 
    { 
        this.serviceGet = serviceGet;
        this.servicePost = servicePost; 
        this.servicePut = servicePut; 
        this.serviceDelete = serviceDelete; 
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

    async deleteUser(idUser: number): Promise<boolean> {        
        return this.serviceDelete.deleteUsers(idUser);
    }
}