import { UserSecretStorageService } from '@/shared/lib/helpers/userSecretStorage.ts';
import { AuthRoutePath } from '@/shared/config/routeConfig/routeConfig.tsx';

const getAuthorizationHeaderValue = (secret: string | undefined): string => `Bearer ${secret}`;

export const getSecretHeader = async () => getAuthorizationHeaderValue(
    UserSecretStorageService.get(),
);

export const unauthorizedHandler = (status: number) => {
    if (status === 401) {
        UserSecretStorageService.clear();
        window.location.href = AuthRoutePath.Signin;
    }
};
