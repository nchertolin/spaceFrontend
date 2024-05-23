import { z } from 'zod';

export const editPasswordFormSchema = z.object({
    password: z.string()
        .min(6, { message: 'Минимум 6 символов' }),
    rpassword: z.string()
        .min(6, { message: 'Минимум 6 символов' }),
})
    .refine((data) => data.password === data.rpassword, {
        message: 'Пароли не совпадают',
        path: ['rpassword'],
    });

export type EditPasswordFormSchema = z.infer<typeof editPasswordFormSchema>;
