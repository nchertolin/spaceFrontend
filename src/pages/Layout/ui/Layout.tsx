import { Outlet } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import { memo } from 'react';
import { MenuBar } from '@/widgets/MenuBar/MenuBar.tsx';

const Layout = () => (
    <Stack
        minHeight="100vh"
        bgcolor={(theme) => theme.palette.background.paper}
    >
        <Box bgcolor={(theme) => theme.palette.background.default}>
            <Box maxWidth={1920} width="100%" m="0 auto">
                <MenuBar />
            </Box>
        </Box>
        <Box
            width="100%"
            maxWidth={1920}
            px={4}
            py={8}
            m="0 auto"
        >
            <Outlet />
        </Box>

    </Stack>
);

export default memo(Layout);
