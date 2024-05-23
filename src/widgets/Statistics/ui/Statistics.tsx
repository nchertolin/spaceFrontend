import { memo, useCallback, useMemo } from 'react';
import { BaseList } from '@/shared/ui/List/List.tsx';
import { IStatisticsCard } from '@/entities/StatisticsCard/models/IStatisticsCard.ts';
import { StatisticsCard } from '@/entities/StatisticsCard';

import { useStatisticsQuery } from '@/widgets/Statistics/api/statisticsApi.ts';
import { Spinner } from '@/shared/ui/Spinner/Spinner.tsx';
import { getDataWithIcons } from '@/widgets/Statistics/lib/helpers/getDataWithIcons.tsx';

export const Statistics = memo(() => {
    const { isLoading, data } = useStatisticsQuery();
    const statistics = useMemo(
        () => getDataWithIcons(data),
        [data],
    );

    const renderItem = useCallback(
        (item: IStatisticsCard) => (<StatisticsCard key={item.title} {...item} />),
        [],
    );

    if (isLoading) return <Spinner />;

    return (
        <BaseList
            direction="row"
            spacing={3}
            items={statistics}
            render={renderItem}
        />
    );
});
