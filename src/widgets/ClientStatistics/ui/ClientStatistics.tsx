import { memo, useCallback } from 'react';
import { BaseList } from '@/shared/ui/List/List.tsx';
import { ClientStatisticsCard } from '@/entities/ClientStatisticsCard/ui/ClientStatisticsCard.tsx';
import { IClientStatisticsCard } from '@/entities/ClientStatisticsCard/models/IStatisticsCard.ts';
import { getDataWithIcons } from '@/widgets/ClientStatistics/lib/getDataWithIcons.tsx';

interface IClientStatisticsProps {
    readonly purchasesCount: number;
    readonly bonuses: number;
}

export const ClientStatistics = memo((props: IClientStatisticsProps) => {
    const { purchasesCount, bonuses } = props;
    const renderItem = useCallback(
        (item: IClientStatisticsCard) => (<ClientStatisticsCard key={item.title} {...item} />),
        [],
    );

    return (
        <BaseList
            flexGrow="1"
            spacing={3}
            items={getDataWithIcons(purchasesCount, bonuses)}
            render={renderItem}
        />
    );
});
