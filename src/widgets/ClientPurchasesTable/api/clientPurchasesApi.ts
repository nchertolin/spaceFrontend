import { useQuery } from '@tanstack/react-query';
import { http } from '@/app/api/api.ts';
import { IPurchase } from '@/entities/Purchase/model/IPurchase.ts';

interface IRequest {
    readonly limit?: number;
    readonly page?: number;
    readonly search?: string;
    readonly startDate?: Date | null;
    readonly endDate?: Date | null;
}

interface IResponse {
    count: number;
    rows: IPurchase[];
}

const getClientPurchases = async (id: number, params: IRequest): Promise<IResponse> => {
    const res = await http.get(`/clients/${id}/purchases`, { params });
    const { count, rows } = res.data;
    return { count, rows };
};

export const useClientPurchasesQuery = (clientId: number, params: IRequest) => {
    const { isLoading, data } = useQuery(
        {
            queryKey: ['clients', clientId, params],
            queryFn: () => getClientPurchases(clientId, params),
        },
    );
    return { isLoading, data };
};
