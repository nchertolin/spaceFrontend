import { ClientDto } from '@/entities/Client';

export interface ClientsResponse {
    count: number;
    rows: ClientDto[];
}
