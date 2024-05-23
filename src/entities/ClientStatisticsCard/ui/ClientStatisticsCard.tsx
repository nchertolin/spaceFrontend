import { Box, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import classNames from './ClientStatisticsCard.module.css';
import { IClientStatisticsCard } from '../models/IStatisticsCard.ts';

export const ClientStatisticsCard = memo((props: IClientStatisticsCard) => {
    const {
        title, value, icon,
    } = props;

    return (
        <Box
            className={classNames.card}
            bgcolor={(theme) => theme.palette.secondary.main}
            p={3}
        >
            <Stack direction="row" spacing={4} alignItems="center" justifyContent="space-between">
                <Stack direction="row" spacing={2} alignItems="center">
                    <Stack
                        width={56}
                        height={56}
                        bgcolor={(theme) => theme.palette.background.paper}
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="var(--border-radius)"
                    >
                        {icon}
                    </Stack>
                    <Typography color="primary" variant="body2">{title}</Typography>
                </Stack>

                <Typography color="primary" variant="h2">{value}</Typography>
            </Stack>
        </Box>
    );
});
