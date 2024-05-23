import axios, { AxiosInstance } from 'axios';
import { addToastIdToRequest, dismissToast } from './interceptors/toastPending/toastPending.ts';
import { getSecretHeader, unauthorizedHandler } from './interceptors/secretToken/secretToken.ts';

export const http: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API,
});

http.interceptors.request.use(
    async (config) => {
        const { headers } = config;
        const newHeaders = addToastIdToRequest(headers, config.method || '');

        return {
            ...config,
            headers: {
                ...newHeaders,
                Authorization: await getSecretHeader(),
            },
        };
    },
    (error) => Promise.reject(error),
);

http.interceptors.response.use(
    (response) => {
        dismissToast(response);
        return response;
    },
    async (error) => {
        dismissToast(error);
        unauthorizedHandler(error.response.status);
        return Promise.reject(error);
    },
);
