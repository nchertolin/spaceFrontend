import { useQuery } from '@tanstack/react-query';
import { http } from '@/app/api/api.ts';

const getClients = async (): Promise<{ id: number, label: string }[]> => {
    const res = await http.get('/clients/select');
    return res.data;
};

export const useClientsShortQuery = () => {
    const { isLoading, data } = useQuery(
        {
            queryKey: ['clients/select'],
            queryFn: () => getClients(),
        },
    );
    return { isLoading, data };
};
