import { IDataForRegistration } from '../../model/DataForRegistration';
export declare class UserPostService {
    private prisma;
    registerUser(dataForRegistration: IDataForRegistration): Promise<object>;
}
