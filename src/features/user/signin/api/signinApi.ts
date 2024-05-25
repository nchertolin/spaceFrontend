import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { http } from '@/app/api/api.ts';
import { useActions } from '@/app/providers/StoreProvider';

interface IRequest {
    readonly login: string;
    readonly password: string;
}

interface IResponse {
    readonly id: number;
    readonly token: string;
    readonly login: string;
    readonly name: string;
}

const postData = async (data: IRequest): Promise<IResponse> => {
    const res = await http.post('/signin', data);
    return res.data;
};

export const useSigninMutation = () => {
    const { signin: userSignin } = useActions();
    const navigate = useNavigate();
    
    const { isPending, mutateAsync: signin } = useMutation({
        mutationFn: async (data: IRequest) => postData(data),
        onSuccess: (data: IResponse) => {
            userSignin(data);
            navigate('/');
            toast.success('Вы авторизованы');
        },
        onError: () => toast.error('Ошибка авторизации'),
    });
    
    return { isPending, signin };
};
