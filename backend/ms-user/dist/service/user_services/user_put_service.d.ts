import { IDataUpdate } from '../../model/DataUpdate';
export declare class UserPutService {
    private prisma;
    private UserGetService;
    updateUser(idUser: number, dataUpdate: IDataUpdate): Promise<object>;
}
