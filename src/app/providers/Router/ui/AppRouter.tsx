import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '@/pages/Layout';
import { AppRoutesProps, authRouteConfig, routeConfig } from '@/shared/config/routeConfig/routeConfig.tsx';
import { RequireAuth } from '@/app/providers/Router/ui/RequireAuth.tsx';
import { Spinner } from '@/shared/ui/Spinner/Spinner.tsx';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const { element } = route;
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{route.element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Suspense fallback={<Spinner />}>
            <Routes>
                {Object.values(authRouteConfig)
                    .map(renderWithWrapper)}
                <Route path="/" element={<Layout />}>
                    {Object.values(routeConfig)
                        .map(renderWithWrapper)}
                </Route>
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
