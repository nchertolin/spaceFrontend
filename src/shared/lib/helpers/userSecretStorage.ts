import { LocalStorageService } from './localStorage';

export namespace UserSecretStorageService {
    const USER_SECRET_KEY = 'USER_SECRET_KEY';
    const USER_LOGIN = 'LOGIN';
    const USER_NAME = 'NAME';

    export async function save(secret: string, login: string, name: string): Promise<void> {
        await LocalStorageService.save(USER_SECRET_KEY, secret);
        await LocalStorageService.save(USER_LOGIN, login);
        await LocalStorageService.save(USER_NAME, name);
    }

    export async function remove(): Promise<void> {
        await LocalStorageService.remove(USER_SECRET_KEY);
    }

    export function get(): Promise<string | null> {
        return LocalStorageService.get<string>(USER_SECRET_KEY);
    }

    export function getLogin(): Promise<string | null> {
        return LocalStorageService.get<string>(USER_LOGIN);
    }

    export function getName(): Promise<string | null> {
        return LocalStorageService.get<string>(USER_NAME);
    }

    export async function clear(): Promise<void> {
        await LocalStorageService.clear();
    }

    export async function isValid(): Promise<boolean> {
        const secret = await get();
        return secret !== null;
    }
}
