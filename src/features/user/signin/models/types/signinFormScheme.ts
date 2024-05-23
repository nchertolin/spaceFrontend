import { z } from 'zod';

export const signinFormSchema = z.object({
    login: z.string()
        .min(1, { message: 'Обязательное поле' }),
    password: z.string()
        .min(6, { message: 'Минимум 6 символов' }),
});

export type SigninFormSchema = z.infer<typeof signinFormSchema>;
