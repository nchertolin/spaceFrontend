import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { http } from '@/app/api/api.ts';

interface IRequest {
    readonly name: string;
}

const postData = async (data: IRequest): Promise<string> => {
    const res = await http.post('/services', data);
    return res.data.name;
};

export const useAddServiceMutation = (handleSuccessPost: () => void) => {
    const queryClient = useQueryClient();

    const { isPending, mutateAsync: addService } = useMutation({
        mutationFn: async (data: IRequest) => postData(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['services'],
            });
            toast.success('Услуга успешно добавлена');
            handleSuccessPost();
        },
        onError: () => toast.error('Ошибка добавления услуги'),
    });

    return { isPending, addService };
};
