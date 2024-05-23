import {
    ChangeEvent, memo, useMemo, useState,
} from 'react';
import { SelectChangeEvent } from '@mui/material';

import { BaseDataTable } from '@/widgets/DataTable';
import { columns } from '../lib/const.tsx';
import { getPagesCount } from '@/shared/lib/helpers/getPagesCount.ts';
import { useClientPurchasesQuery } from '../api/clientPurchasesApi.ts';

interface ClientPurchasesTableProps {
    clientId: number;
}

export const ClientPurchasesTable = memo(({ clientId }: ClientPurchasesTableProps) => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [search, setSearch] = useState('');
    const [limit, setLimit] = useState('10');
    const [page, setPage] = useState(1);
    const { isLoading, data } = useClientPurchasesQuery(clientId, {
        limit: Number(limit),
        page,
        search,
        startDate,
        endDate,
    });
    const pagesCount = useMemo(
        () => getPagesCount(data?.count || 0, Number(limit)),
        [data?.count, limit],
    );

    const onLimitChange = (e: SelectChangeEvent) => setLimit(e.target.value);
    const onPageChange = (_: ChangeEvent<unknown>, value: number) => setPage(value);
    const onStartDateChange = (newValue: Date) => setStartDate(newValue);
    const onEndDateChange = (newValue: Date) => setEndDate(newValue);
    const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

    return (
        <BaseDataTable
            isLoading={isLoading}
            columns={columns}
            rows={data?.rows || []}
            pagesCount={pagesCount}
            limit={limit}
            page={page}
            startDate={startDate}
            endDate={endDate}
            search={search}
            onStartDateChange={onStartDateChange}
            onEndDateChange={onEndDateChange}
            onSearchChange={onSearchChange}
            onLimitChange={onLimitChange}
            onPageChange={onPageChange}
        />
    );
});
