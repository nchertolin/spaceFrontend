import { toast } from 'react-toastify';

export const addToastIdToRequest = (headers: any, method: string) => {
    const newHeaders = { ...headers };
    if (method === 'post' || method === 'put' || method === 'patch') {
        const id = toast.loading('Отправка запроса');
        newHeaders._toastId = id;
    }
    return newHeaders;
};

export const dismissToast = (response: any) => {
    const toastId = response.config.headers._toastId;
    if (toastId) {
        toast.dismiss(toastId);
    }
};
