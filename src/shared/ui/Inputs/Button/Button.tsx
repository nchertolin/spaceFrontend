import { Button, ButtonProps, styled } from '@mui/material';
import { memo } from 'react';

export const BaseButton = memo(styled(Button)<ButtonProps>(({ theme }) => ({
    '&': {
        minWidth: 0,
        fontWeight: 400,
        textTransform: 'none',
        padding: [theme.spacing(1), theme.spacing(2)].join(' '),
    },
})));
