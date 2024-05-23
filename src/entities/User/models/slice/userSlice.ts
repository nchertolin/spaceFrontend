import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema } from '@/entities/User/models/types/UserSchema.ts';
import { UserSecretStorageService } from '@/shared/lib/helpers/userSecretStorage.ts';

const initialState: UserSchema = {
    user: {
        login: '',
        name: '',
    },
    isAuth: false,
};


interface SigninPayload {
    readonly token: string
    readonly login: string,
    readonly name: string,
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
            UserSecretStorageService.save(token, login, name);
            state.user = { login, name };
            state.isAuth = true;
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
