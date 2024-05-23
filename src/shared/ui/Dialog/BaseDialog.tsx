import { Dialog, DialogProps, styled } from '@mui/material';
import { memo } from 'react';

export const BaseDialog = memo(styled(Dialog)<DialogProps>(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        backgroundColor: theme.palette.background.paper,
    },
})));
