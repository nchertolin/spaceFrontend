import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import PersonIcon from '@mui/icons-material/Person';
import { routeConfig } from '@/shared/config/routeConfig/routeConfig.tsx';

export const TABS = [
    {
        label: 'Главная',
        path: routeConfig?.Main.path ?? '',
        startIcon: <HomeRoundedIcon />,
    },
    {
        label: 'Добавить',
        path: routeConfig?.PurchasesAdd.path ?? '',
        startIcon: <AddRoundedIcon />,
    },
    {
        label: 'Продажи',
        path: routeConfig?.Purchases.path ?? '',
        startIcon: <LocalMallRoundedIcon />,
    },
    {
        label: 'Клиенты',
        path: routeConfig?.Clients.path ?? '',
        startIcon: <PeopleAltRoundedIcon />,
    },
    {
        label: 'Аккаунт',
        path: routeConfig?.Account.path ?? '',
        startIcon: <PersonIcon />,
    },
];
