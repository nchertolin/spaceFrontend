export type {
    IUser,
} from './models/types/IUser.ts';

export {
    userActions, userReducer,
} from './models/slice/userSlice.ts';

export { getUserIsAuth } from './models/selectors/getUserIsAuth';
export { getUser } from './models/selectors/getUser';
