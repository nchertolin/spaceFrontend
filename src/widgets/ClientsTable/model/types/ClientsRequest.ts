export interface ClientsRequest {
    readonly limit?: number;
    readonly page?: number;
    readonly search?: string;
    readonly startDate?: Date | null;
    readonly endDate?: Date | null;
}
