import { Stack } from '@mui/material';
import classNames from './Spinner.module.css';

export const Spinner = () => (
    <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ width: '100%', height: '100vh' }}
    >
        <div className={classNames.spinner}>
            <div className={classNames.bounce1} />
            <div className={classNames.bounce2} />
        </div>
    </Stack>
);
