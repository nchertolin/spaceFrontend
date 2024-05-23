import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import { IClientStatisticsCard } from '@/entities/ClientStatisticsCard/models/IStatisticsCard.ts';

export const getDataWithIcons = (purchasesCount: number, bonuses: number): IClientStatisticsCard[] => [
    {
        title: 'Покупки',
        value: purchasesCount,
        icon: <TrendingUpIcon color="primary" />,
    },
    {
        title: 'Бонусы',
        value: bonuses,
        icon: <CurrencyRubleIcon color="primary" />,
    },
];
