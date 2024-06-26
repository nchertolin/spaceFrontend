import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema } from '@/entities/User/models/types/UserSchema.ts';
import { UserSecretStorageService } from '@/shared/lib/helpers/userSecretStorage.ts';

const initialState: UserSchema = {
    user: UserSecretStorageService.getUser(),
    isAuth: UserSecretStorageService.isValid(),
};

interface SigninPayload {
    readonly id: number
    readonly login: string,
    readonly name: string,
    readonly token: string
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            UserSecretStorageService.clear();
            state.isAuth = false;
        },
        signin: (state, action: PayloadAction<SigninPayload>) => {
            const { token, login, name } = action.payload;
            UserSecretStorageService.save(token, name, login);
            state.user = { login, name };
            state.isAuth = true;
        },
        init: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
