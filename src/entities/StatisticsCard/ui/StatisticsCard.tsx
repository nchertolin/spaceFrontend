import { Box, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import { IStatisticsCard } from '@/entities/StatisticsCard/models/IStatisticsCard.ts';
import classNames from './StatisticsCard.module.css';
import { getFormattedValue } from '@/shared/lib/helpers/formatValue.ts';

export const StatisticsCard = memo((props: IStatisticsCard) => {
    const {
        title, current, increase, percent, icon,
    } = props;

    const isSuccess = increase >= 0;
    const formattedIncrese = getFormattedValue(increase, isSuccess);
    const formattedPercent = getFormattedValue(percent, isSuccess);
    const color = isSuccess ? 'success.main' : 'error';

    return (
        <Box
            className={classNames.card}
            bgcolor={(theme) => theme.palette.secondary.main}
            p={3}
        >
            <Stack spacing={2}>
                <Stack direction="row" spacing={3} alignItems="center">
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

                    <Typography variant="body2" color="primary">{title}</Typography>
                </Stack>
                <Stack>
                    <Stack spacing={1} justifyContent="space-between">
                        <Stack
                            direction="row"
                            spacing={3}
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Typography variant="h2" color="primary">{current}</Typography>
                            <Typography variant="body1" color={color}>
                                {`${formattedPercent}%`}
                            </Typography>
                        </Stack>
                        <Stack>

                            <Typography variant="subtitle1" color="primary.dark">
                                <Typography component="span" color={color}>
                                    {formattedIncrese}
                                    {' '}
                                </Typography>
                                vs пред. мес.
                            </Typography>
                        </Stack>
                    </Stack>

                </Stack>
            </Stack>
        </Box>
    );
});
