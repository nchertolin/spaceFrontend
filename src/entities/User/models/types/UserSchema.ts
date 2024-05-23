import { IUser } from '@/entities/User';

export interface UserSchema {
    user: IUser;
    isAuth: boolean;
}
