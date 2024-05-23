import { z } from 'zod';

export const editLoginFormSchema = z.object({
    login: z.string()
        .min(1, { message: 'Обязательное поле' }),
    name: z.string()
        .min(1, { message: 'Обязательное поле' }),
});

export type EditLoginFormSchema = z.infer<typeof editLoginFormSchema>;
