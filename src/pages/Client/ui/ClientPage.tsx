import { Stack, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ClientStatistics } from '@/widgets/ClientStatistics';
import { ClientPurchasesTable } from '@/widgets/ClientPurchasesTable';
import { useClientQuery } from '@/pages/Client/api/clientApi';
import { Spinner } from '@/shared/ui/Spinner/Spinner';
import { NotFoundPage } from '@/pages/NotFound';
import { StealBonusesModal } from '@/features/client/stealBonuses';
import { EditClientForm } from '@/features/client/edit';

const ClientPage = () => {
    const { id } = useParams();
    const clientId = parseInt(id!, 10);
    const { isLoading, data } = useClientQuery(clientId);

    if (isLoading) return <Spinner />;
    if (!data) return <NotFoundPage />;

    return (
        <Stack spacing={8}>
            <Stack spacing={4}>
                <Typography variant="body2" color="primary.dark">
                    Данные клиента
                </Typography>
                <Stack direction="row" spacing={3}>
                    <EditClientForm defaultValues={data!} />
                    <Stack spacing={3} width="100%" justifyContent="space-between">
                        <ClientStatistics
                            purchasesCount={data!.purchasesCount}
                            bonuses={data!.bonuses}
                        />
                        <StealBonusesModal id={parseInt(id!, 10)} />
                    </Stack>
                </Stack>
            </Stack>
            <Stack spacing={4}>
                <Typography variant="body2" color="primary.dark">
                    Покупки
                </Typography>
                <ClientPurchasesTable clientId={clientId} />
            </Stack>
        </Stack>
    );
};

export default ClientPage;
