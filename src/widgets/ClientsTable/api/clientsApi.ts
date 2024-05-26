import { useQuery } from '@tanstack/react-query';
import { http } from '@/app/api/api.ts';
import { clientsMapper } from '../lib/mappers/clientsMapper.ts';
import { ClientsRequest } from '../model/types/ClientsRequest.ts';
import { ClientsResponse } from '../model/types/ClientsResponse.ts';

const getClients = async (params: ClientsRequest): Promise<ClientsResponse> => {
    const res = await http.get('/clients', { params });
    const { count, rows } = res.data;
    return { count, rows };
};

export const useClientsQuery = (params: ClientsRequest) => {
    const { isLoading, data, isSuccess } = useQuery(
        {
            queryKey: ['clients', params],
            queryFn: () => getClients(params),

        },
    );

    if (isSuccess) {
        return { isLoading: false, data: clientsMapper(data) };
    }

    return { isLoading, data };
};
