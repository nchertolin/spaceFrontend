import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { http } from '@/app/api/api.ts';

interface IRequest {
    readonly name: string;
    readonly phone: string;
    readonly description: string;
}

const postData = async (data: IRequest): Promise<void> => {
    await http.post('/clients', data);
};

export const useAddClientMutation = (handleSuccessPost: () => void) => {
    const queryClient = useQueryClient();

    const { isPending, mutateAsync: addClient } = useMutation({
        mutationFn: async (data: IRequest) => postData(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['clients/select'],
            });
            toast.success('Клиент успешно добавлен');
            handleSuccessPost();
        },
        onError: () => toast.error('Ошибка добавления клиента'),
    });

    return { isPending, addClient };
};
