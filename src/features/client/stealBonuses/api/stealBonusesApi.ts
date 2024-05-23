import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { http } from '@/app/api/api.ts';

interface IRequest {
    readonly id: number;
    readonly bonuses: number;
}

const postData = async (data: IRequest): Promise<number> => {
    const { id, bonuses } = data;
    const response = await http.patch(`/clients/${id}/steal`, { bonuses });
    return response.data.id;
};

export const useStealBonusesMutation = (handleSuccessPost: () => void) => {
    const queryClient = useQueryClient();

    const { isPending, mutateAsync: stealBonuses } = useMutation({
        mutationFn: async (data: IRequest) => postData(data),
        onSuccess: (clientId: number) => {
            queryClient.invalidateQueries({
                queryKey: ['client', clientId],
            });
            handleSuccessPost();
            toast.success('Бонусы успешно списаны');
        },
        onError: () => toast.error('Ошибка списания бонусов'),
    });

    return { isPending, stealBonuses };
};
