import { ClientsResponse } from '@/widgets/ClientsTable/model/types/ClientsResponse.ts';
import { IClient } from '@/entities/Client';

interface MappedClients {
    count: number;
    rows: IClient[];
}

export const clientsMapper = (data: ClientsResponse): MappedClients => ({
    count: data.count,
    rows: data.rows.map((client) => ({
        ...client,
        lastPurchase: client.purchases?.[0],
    })) as IClient[],
});
