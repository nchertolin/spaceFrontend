import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { http } from '@/app/api/api.ts';

interface IRequest {
    readonly date: Date;
    readonly name: string;
    readonly clientId: number;
    readonly note?: string;
    readonly reward: number;
}

const postData = async (data: IRequest): Promise<any> => {
    const res = await http.post('/purchases', data);
    return res.data;
};

export const useAddPurchaseMutation = (handleSuccessPost: () => void) => {
    const { isPending, mutateAsync: addPurchase } = useMutation(
        {
            mutationFn: async (data: IRequest) => postData(data),
            onSuccess: () => {
                toast.success('Продажа успешно добавлена');
                handleSuccessPost();
            },
            onError: () => toast.error('Ошибка добавления'),
        },
    );
    return { isPending, addPurchase };
};
