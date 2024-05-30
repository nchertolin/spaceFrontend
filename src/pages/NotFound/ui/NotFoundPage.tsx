import { Stack, Typography } from '@mui/material';
import { ErrorPageIcon } from '@/shared/ui/ErrorPageIcon/ErrorPageIcon.tsx';

const NotFoundPage = () => (
    <Stack
        spacing={3}
        alignItems="center"
        justifyContent="center"
        height="100%"
    >
        <ErrorPageIcon />
        <Typography color="secondary.light" variant="body2" maxWidth="50%" textAlign="center">
            Извините, мы не можем найти эту страницу. Но не волнуйтесь, на нашей
            {' '}
            главной
            {' '}
            странице вы найдете множество других вещей.
        </Typography>
    </Stack>
);

export default NotFoundPage;
