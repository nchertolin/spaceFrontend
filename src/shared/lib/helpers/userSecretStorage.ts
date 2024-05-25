import { LocalStorageService } from './localStorage';

export namespace UserSecretStorageService {
    const USER_SECRET_KEY = 'USER_SECRET_KEY';
    const USER_NAME = 'USER_ID';
    const USER_LOGIN = 'USER_ID';

    export async function save(secret: string, name: string, login: string): Promise<void> {
        await LocalStorageService.save(USER_SECRET_KEY, secret);
        await LocalStorageService.save(USER_NAME, name);
        await LocalStorageService.save(USER_LOGIN, login);
    }

    export async function remove(): Promise<void> {
        await LocalStorageService.remove(USER_SECRET_KEY);
    }

    export function getUser() {
        const login = LocalStorageService.get<string>(USER_LOGIN);
        const name = LocalStorageService.get<string>(USER_NAME);

        return {
            login: login || '',
            name: name || '',
        };
    }

    export function get() {
        return LocalStorageService.get<string>(USER_SECRET_KEY);
    }

    export async function clear(): Promise<void> {
        await LocalStorageService.clear();
    }

    export async function isValid(): Promise<boolean> {
        const secret = await get();
        return secret !== null;
    }
}
