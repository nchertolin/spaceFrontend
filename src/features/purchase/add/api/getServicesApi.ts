import { useQuery } from '@tanstack/react-query';
import { http } from '@/app/api/api.ts';

const getServices = async (): Promise<string[]> => {
    const res = await http.get('/services');
    return res.data;
};

export const useServicesQuery = () => {
    const { isLoading, data } = useQuery(
        {
            queryKey: ['services'],
            queryFn: () => getServices(),
        },
    );
    return { isLoading, data };
};
