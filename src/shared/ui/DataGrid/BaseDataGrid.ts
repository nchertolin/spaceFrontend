import { styled } from '@mui/material';
import { DataGrid, DataGridProps } from '@mui/x-data-grid';

export const BaseDataGrid = styled(DataGrid)<DataGridProps>(({ theme }) => ({
    '.MuiDataGrid-cell, .MuiDataGrid-columnHeader': {
        padding: [0, theme.spacing(3)].join(' '),
    },
    '.MuiDataGrid-row:nth-of-type(2n + 1)': {
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
        },
    },
    '.MuiDataGrid-columnHeader': {
        color: theme.palette.primary.dark,
        backgroundColor: theme.palette.background.paper,

        '& svg': {
            fill: theme.palette.primary.dark,
        },

        '&:focus-within': {
            outline: 'none',
        },
    },
    '.MuiDataGrid-filler': {
        backgroundColor: theme.palette.primary.dark,
    },
    '.MuiDataGrid-columnHeaderTitle': {
        fontWeight: '400',
    },
    '.MuiDataGrid-cell:focus-within': {
        outline: 'none',
    },
    '.MuiTablePagination-displayedRows, .MuiTablePagination-actions': {
        display: 'none',
    },
}));
