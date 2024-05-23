import { z } from 'zod';

const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

export const editClientFormScheme = z.object({
    name: z.string()
        .min(1, { message: 'Обязательное поле' }),
    phone: z.string()
        .regex(phoneRegex, { message: 'Некорректный формат номера' }),
    description: z.string(),
});

export type EditClientFormScheme = z.infer<typeof editClientFormScheme>;
