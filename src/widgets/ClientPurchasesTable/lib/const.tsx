import { GridColDef } from '@mui/x-data-grid';
import { getLocaledDate } from '@/shared/lib/helpers/getLocaledDate.ts';

export const columns: GridColDef[] = [
    {
        field: 'date',
        headerName: 'Дата',
        align: 'left',
        width: 200,
        valueGetter: getLocaledDate,
    },
    {
        field: 'name',
        headerName: 'Услуга',
        align: 'left',
        flex: 1,
        minWidth: 400,
        sortable: false,
    },
    {
        field: 'note',
        headerName: 'Заметка',
        align: 'left',
        flex: 1,
        minWidth: 600,
        sortable: false,
    },
    {
        field: 'reward',
        headerName: 'Бонусы',
        align: 'right',
        minWidth: 150,
        valueGetter: (value: number) => (value * 0.1),
        renderCell: ({ value }) => value.toLocaleString(),
    },
];
