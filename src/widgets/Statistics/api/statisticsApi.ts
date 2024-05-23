import { useQuery } from '@tanstack/react-query';
import { http } from '@/app/api/api.ts';
import { IStatistics } from '@/entities/Statistics';

interface IResponse extends IStatistics {
    id: number
}

const getStatistics = async (): Promise<IResponse> => {
    const res = await http.get('/statistics');
    return res.data;
};

export const useStatisticsQuery = () => {
    const { isLoading, data } = useQuery(
        {
            queryKey: ['statistics'],
            queryFn: () => getStatistics(),
        },
    );
    return { isLoading, data };
};
