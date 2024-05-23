import { GridColDef } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
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
        minWidth: 300,
        sortable: false,
    },
    {
        field: 'client',
        headerName: 'Клиент',
        align: 'left',
        flex: 1,
        minWidth: 400,
        sortable: false,
        valueGetter: (_, row) => row.client.name,
        renderCell: (params) => (
            <Link to={`/clients/${params.row.client.id}`}>{params.value}</Link>
        ),
    },
    {
        field: 'client[phone]',
        headerName: 'Телефон',
        align: 'left',
        width: 250,
        sortable: false,
        valueGetter: (_, row) => row.client.phone,
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
        headerName: 'Получено',
        align: 'right',
        width: 150,
        renderCell: ({ value }) => value.toLocaleString(),
    },
];
