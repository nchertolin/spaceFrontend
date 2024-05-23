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

const getPurchases = async (params: IRequest): Promise<IResponse> => {
    const res = await http.get('/purchases', { params });
    const { count, rows } = res.data;
    return { count, rows };
};

export const usePurchasesQuery = (params: IRequest) => {
    const { isLoading, data } = useQuery(
        {
            queryKey: ['purchases', params],
            queryFn: () => getPurchases(params),
        },
    );
    return { isLoading, data };
};
