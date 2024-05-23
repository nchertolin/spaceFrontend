import {
    styled, Tab, TabProps, Tabs, TabsProps, Typography,
} from '@mui/material';
import { ReactNode } from 'react';

interface BaseTabsProps extends TabsProps {
    children?: ReactNode;
}

interface BaseTabProps extends TabProps {
    to: string;
}

interface TabLabelProps {
    label: string,
    startIcon: ReactNode;
}

const BaseTabs = styled(Tabs)<BaseTabsProps>(({ theme }) => ({
    '& .MuiTabs-indicator': {
        width: '0 !important',
    },
    '& .MuiTabs-flexContainer': {
        alignItems: 'flex-start',
        columnGap: theme.spacing(1),
    },
}));

const BaseTab = styled(Tab)<BaseTabProps>(({ theme }) => ({
    '&': {
        color: theme.palette.primary.dark,
        background: theme.palette.background.paper,
        textTransform: 'none',
        borderRadius: theme.spacing(1),
        padding: [theme.spacing(2), theme.spacing(4)].join(' '),
    },
    '&.Mui-selected': {
        color: theme.palette.primary.main,
        background: theme.palette.background.paper,
        paddingTop: theme.spacing(3),
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
}));

const TabLabel = ({
    label,
    startIcon,
}: TabLabelProps) => (
    <Typography
        sx={{
            display: 'flex',
            columnGap: (theme) => theme.spacing(1),
            alignItems: 'center',
        }}
        variant="body1"
    >
        {startIcon}
        {' '}
        {label}
    </Typography>
);

export {
    BaseTabs,
    BaseTab,
    TabLabel,
};
