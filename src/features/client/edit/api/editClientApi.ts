import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { http } from '@/app/api/api.ts';

interface IRequest {
    readonly id: number;
}

const postData = async (data: IRequest): Promise<number> => {
    const { id, ...updatedClient } = data;
    await http.put(`/clients/${id}`, updatedClient);
    return id;
};

export const useEditClientMutation = () => {
    const queryClient = useQueryClient();

    const { isPending, mutateAsync: editClient } = useMutation({
        mutationFn: async (data: IRequest) => postData(data),
        onSuccess: (clientId: number) => {
            queryClient.invalidateQueries({
                queryKey: ['client', clientId],
            });
            toast.success('Клиент успешно обновлен');
        },
        onError: () => toast.error('Ошибка обновления клиента'),
    });

    return { isPending, editClient };
};
