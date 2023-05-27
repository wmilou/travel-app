import { IUser } from "../../model/User";
export declare class UserGetService {
    private prisma;
    fetchAllUsers(): Promise<Array<IUser>>;
    fetchOneUser(idUsers: number): Promise<IUser>;
}
