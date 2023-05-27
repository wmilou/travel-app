import { IUser } from "../model/User";
import { IDataUpdate } from "../model/DataUpdate";
import { IDataForRegistration } from "../model/DataForRegistration";
import { UserPutService } from "../service/user_services/user_put_service";
import { UserGetService } from "../service/user_services/user_get_service";
import { UserPostService } from "../service/user_services/user_post_service";
import { UserDeleteService } from "../service/user_services/user_delete_service";
export declare class UserController {
    private serviceGet;
    private servicePut;
    private servicePost;
    private serviceDelete;
    constructor({ serviceGet, servicePost, servicePut, serviceDelete }: {
        serviceGet?: UserGetService | undefined;
        servicePost?: UserPostService | undefined;
        servicePut?: UserPutService | undefined;
        serviceDelete?: UserDeleteService | undefined;
    });
    fetchAllUsers(): Promise<Array<IUser>>;
    fetchOneUser(idUsers: number): Promise<IUser>;
    registerUser(dataForRegistration: IDataForRegistration): Promise<object>;
    updateUser(idUser: number, dataUpdate: IDataUpdate): Promise<object>;
    deleteUser(idUser: number): Promise<boolean>;
}
