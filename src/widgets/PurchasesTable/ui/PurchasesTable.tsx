import { ChangeEvent, memo, ReactNode, useMemo, useState, } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { usePurchasesQuery } from '../api/purchasesApi.ts';

import { BaseDataTable } from '@/widgets/DataTable';
import { columns } from '../lib/const.tsx';
import { getPagesCount } from '@/shared/lib/helpers/getPagesCount.ts';

export const PurchasesTable = memo(() => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [search, setSearch] = useState('');
    const [limit, setLimit] = useState('10');
    const [page, setPage] = useState(1);
    
    const { isLoading, data } = usePurchasesQuery({
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
    
    const onLimitChange = (e: SelectChangeEvent<unknown>, _: ReactNode) => setLimit(e.target.value as string);
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
