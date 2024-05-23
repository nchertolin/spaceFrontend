import { z } from 'zod';

export const addServiceFormScheme = z.object({
    name: z.string()
        .min(1, { message: 'Обязательное поле' }),
});

export type AddServiceFormScheme = z.infer<typeof addServiceFormScheme>;
