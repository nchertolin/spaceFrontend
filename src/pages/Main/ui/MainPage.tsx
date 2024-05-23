import { Stack } from '@mui/material';
import { useAppSelector } from '@/app/providers/StoreProvider';
import { getUser } from '@/entities/User';
import { Statistics } from '@/widgets/Statistics';
import { Head } from '@/shared/ui/Head/Head.tsx';

const MainPage = () => {
    const user = useAppSelector(getUser);

    return (
        <Stack spacing={8}>
            <Head title={`Добро пожаловать, ${user.name || user.login}`} />
            <Statistics />
        </Stack>
    );
};

export default MainPage;
