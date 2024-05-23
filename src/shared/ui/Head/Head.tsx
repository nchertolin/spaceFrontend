import { Stack, Typography } from '@mui/material';
import { memo } from 'react';

interface HeadProps {
    title?: string,
}

export const Head = memo((props: HeadProps) => {
    const { title } = props;

    return (
        <Stack>
            <Typography variant="h2" color="primary">{title}</Typography>
        </Stack>
    );
});
