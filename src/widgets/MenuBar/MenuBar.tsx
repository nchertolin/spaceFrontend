import { Stack } from '@mui/material';
import { memo } from 'react';
import { NavigationMenu } from '@/widgets/Menu';
import { LogoutButton } from '@/features/user/logout';

export const MenuBar = memo(() => (
    <Stack
        direction="row"
        spacing={3}
        alignItems="flex-start"
        justifyContent="space-between"
        pt={1}
        px={4}
    >
        <NavigationMenu />
        <LogoutButton />
    </Stack>
));
