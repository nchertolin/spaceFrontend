import { useQuery } from '@tanstack/react-query';
import { http } from '@/app/api/api.ts';
import { IClient } from '@/entities/Client/model/IClient.ts';

interface IRequest {
    readonly limit?: number;
    readonly page?: number;
    readonly search?: string;
    readonly startDate?: Date | null;
    readonly endDate?: Date | null;
}

interface IResponse {
    count: number;
    rows: IClient[];
}

const getClients = async (params: IRequest): Promise<IResponse> => {
    const res = await http.get('/clients', { params });
    const { count, rows } = res.data;
    return { count, rows };
};

export const usePurchasesQuery = (params: IRequest) => {
    const { isLoading, data } = useQuery(
        {
            queryKey: ['clients', params],
            queryFn: () => getClients(params),
        },
    );
    return { isLoading, data };
};
