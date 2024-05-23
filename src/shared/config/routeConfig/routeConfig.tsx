import { RouteProps } from 'react-router-dom';
import { SigninPage } from '@/pages/Signin';
import { MainPage } from '@/pages/Main';
import { PurchasesPage } from '@/pages/Purchases';
import { PurchasesAddPage } from '@/pages/PurchasesAdd';
import { ClientsPage } from '@/pages/Clients';
import { ClientPage } from '@/pages/Client';
import { AccountPage } from '@/pages/Account';
import { NotFoundPage } from '@/pages/NotFound';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AuthRoutes {
    Signin = 'Signin',
}

export enum AppRoutes {
    Main = 'Main',
    Purchases = 'Purchases',
    PurchasesAdd = 'PurchasesAdd',
    Clients = 'Clients',
    Client = 'Client',
    Account = 'Account',
    NotFound = 'NotFound',
}

export const AuthRoutePath: Record<AuthRoutes, string> = {
    [AuthRoutes.Signin]: '/signin',
};

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.Main]: '/',
    [AppRoutes.Purchases]: '/purchases',
    [AppRoutes.PurchasesAdd]: '/add',
    [AppRoutes.Clients]: '/clients',
    [AppRoutes.Client]: '/clients/:id',
    [AppRoutes.Account]: '/account',
    [AppRoutes.NotFound]: '*',
};

export type RoutePathValue = typeof RoutePath[keyof typeof RoutePath];

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.Main]: {
        path: RoutePath.Main,
        element: <MainPage />,
        authOnly: true,
    },
    [AppRoutes.Purchases]: {
        path: RoutePath.Purchases,
        element: <PurchasesPage />,
        authOnly: true,
    },
    [AppRoutes.PurchasesAdd]: {
        path: RoutePath.PurchasesAdd,
        element: <PurchasesAddPage />,
        authOnly: true,
    },
    [AppRoutes.Clients]: {
        path: RoutePath.Clients,
        element: <ClientsPage />,
        authOnly: true,
    },
    [AppRoutes.Client]: {
        path: RoutePath.Client,
        element: <ClientPage />,
        authOnly: true,
    },
    [AppRoutes.Account]: {
        path: RoutePath.Account,
        element: <AccountPage />,
        authOnly: true,
    },
    [AppRoutes.NotFound]: {
        path: RoutePath.NotFound,
        element: <NotFoundPage />,
    },
};

export const authRouteConfig: Record<AuthRoutes, AppRoutesProps> = {
    [AuthRoutes.Signin]: {
        path: `${AuthRoutePath.Signin}`,
        element: <SigninPage />,
    },
};
