import { useQuery } from '@tanstack/react-query';
import { http } from '@/app/api/api.ts';

interface IResponse {
    readonly id: number;
    readonly name: string;
    readonly phone: string;
    readonly description: string;
    readonly bonuses: number;
    readonly purchasesCount: number;
}

const getClient = async (id: number): Promise<IResponse> => {
    const res = await http.get(`/clients/${id}`);
    return res.data;
};

export const useClientQuery = (clientId: number) => {
    const { isLoading, data } = useQuery(
        {
            queryKey: ['client', clientId],
            queryFn: () => getClient(clientId),
        },
    );
    return { isLoading, data };
};
