import { ChangeEvent, memo, ReactNode } from 'react';
import { GridColDef, GridSlots } from '@mui/x-data-grid';
import {
    LinearProgress, Pagination, SelectChangeEvent, Stack, Typography,
} from '@mui/material';
import { IRow } from '../model/IRow.ts';
import { BaseDataGrid } from '@/shared/ui/DataGrid/BaseDataGrid';
import { BaseDatePicker, BaseSelect, Search } from '@/shared/ui/Inputs';
import { EmptyDataOverlay } from '@/shared/ui/EmptyDataOverlay/EmptyDataOverlay.tsx';

interface ClientPurchasesTableProps {
    readonly columns: GridColDef[],
    readonly rows: IRow[],
    readonly pagesCount: number,
    readonly limit: string,
    readonly onLimitChange: (event: SelectChangeEvent<unknown>, child: ReactNode) => void,
    readonly page: number,
    readonly isLoading: boolean,
    readonly onPageChange: (_: ChangeEvent<unknown>, value: number) => void,
    readonly startDate: Date | null,
    readonly endDate: Date | null,
    readonly onStartDateChange: (newValue: Date) => void,
    readonly onEndDateChange: (newValue: Date) => void,
    readonly search: string,
    readonly onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

export const BaseDataTable = memo((props: ClientPurchasesTableProps) => {
    const {
        columns, rows, pagesCount, limit, page, onLimitChange, onPageChange,
        isLoading, startDate, endDate, onStartDateChange, onEndDateChange, search, onSearchChange,
    } = props;

    return (
        <Stack spacing={6}>
            <Stack spacing={6} direction="row" justifyContent="space-between" alignItems="center">
                <Stack spacing={3} direction="row">
                    <BaseDatePicker
                        label="Начальная дата"
                        value={startDate}
                        onChange={onStartDateChange}
                    />
                    <BaseDatePicker
                        label="Конечная дата"
                        value={endDate}
                        onChange={onEndDateChange}
                    />
                </Stack>
                <Search
                    value={search}
                    onChange={onSearchChange}
                    placeholder="Введите ваш запрос"
                    sx={{ width: '40%' }}
                />
            </Stack>

            <BaseDataGrid
                loading={isLoading}
                rows={rows}
                columns={columns}
                density="comfortable"
                rowSelection={false}
                hideFooter
                autoHeight
                slots={{
                    loadingOverlay: LinearProgress as GridSlots['loadingOverlay'],
                    noRowsOverlay: EmptyDataOverlay,
                    noResultsOverlay: EmptyDataOverlay,
                }}
                sx={{ '--DataGrid-overlayHeight': '500px' }}

            />

            <Stack
                spacing={6}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Pagination
                    page={page}
                    onChange={onPageChange}
                    count={pagesCount}
                    color="primary"
                    shape="rounded"
                />
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                >
                    <Typography color="primary.dark">Строк на страницу</Typography>
                    <BaseSelect
                        value={limit}
                        onChange={onLimitChange}
                        values={['10', '25', '50']}
                    />
                </Stack>
            </Stack>
        </Stack>
    );
});
