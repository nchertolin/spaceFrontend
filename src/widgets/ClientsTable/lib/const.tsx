import { GridColDef } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { getLocaledDate } from '@/shared/lib/helpers/getLocaledDate.ts';

export const columns: GridColDef[] = [
    {
        field: 'name',
        headerName: 'Имя',
        align: 'left',
        flex: 1,
        minWidth: 500,
        renderCell: (params) => (
            <Link to={`/clients/${params.row.id}`}>{params.value}</Link>
        ),
    },
    {
        field: 'phone',
        headerName: 'Телефон',
        align: 'left',
        width: 250,
        sortable: false,
    },
    {
        field: 'lastPurchase',
        headerName: 'Последняя услуга',
        align: 'left',
        flex: 1,
        minWidth: 400,
        sortable: false,
        valueGetter: (_, row) => row.lastPurchase?.name || '',
    },
    {
        field: 'lastPurchase[date]',
        headerName: 'Дата',
        align: 'left',
        width: 200,
        valueGetter: (_, row) => getLocaledDate(row.lastPurchase?.date || ''),
    },
    {
        field: 'description',
        headerName: 'Заметка',
        align: 'left',
        flex: 1,
        minWidth: 600,
        sortable: false,
    },
    {
        field: 'bonuses',
        headerName: 'Бонусы',
        align: 'right',
        width: 150,
        renderCell: ({ value }) => value.toLocaleString(),
    },
];
