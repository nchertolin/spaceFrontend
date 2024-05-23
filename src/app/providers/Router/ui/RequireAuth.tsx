import { Navigate, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';
import { AuthRoutePath } from '@/shared/config/routeConfig/routeConfig.tsx';
import { useAppSelector } from '@/app/providers/StoreProvider';
import { getUserIsAuth } from '@/entities/User';

export function RequireAuth({ children }: { children: ReactNode }) {
    const isAuth = useAppSelector(getUserIsAuth);
    const location = useLocation();

    if (!isAuth) {
        return <Navigate to={AuthRoutePath.Signin} state={{ from: location }} replace />;
    }

    return children;
}
