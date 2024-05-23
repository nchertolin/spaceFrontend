import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { IStatistics } from '@/entities/Statistics';
import { IStatisticsCard } from '@/entities/StatisticsCard/models/IStatisticsCard.ts';

const defaultValue = {
    current: 0,
    increase: 0,
    percent: 0,
};

export const getDataWithIcons = (data: IStatistics | undefined): IStatisticsCard[] => [
    {
        title: 'Продажи',
        icon: <TrendingUpIcon color="primary" />,
        ...data?.purchasesCount || defaultValue,
    },
    {
        title: 'Оборот',
        icon: <CurrencyRubleIcon color="primary" />,
        ...data?.bank || defaultValue,
    },
    {
        title: 'Прибыль',
        icon: <CardTravelIcon color="primary" />,
        ...data?.profit || defaultValue,
    },
    {
        title: 'Средний чек',
        icon: <LocalMallIcon color="primary" />,
        ...data?.bill || defaultValue,
    },
];
