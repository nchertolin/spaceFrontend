import { z } from 'zod';

export const stealBonusesFormSchema = z.object({
    bonuses: z.number({
        required_error: 'Обязательное поле',
        invalid_type_error: 'Обязательное поле',
    })
        .min(1, { message: 'Обязательное поле' }),
    _bonuses: z.number({
        required_error: 'Обязательное поле',
        invalid_type_error: 'Обязательное поле',
    })
        .min(1, { message: 'Обязательное поле' }),
})
    .refine(({ bonuses, _bonuses }) => bonuses === _bonuses, {
        message: 'Количество бонусов не совпадает',
        path: ['_amount'],
    });

export type StealBonusesFormSchema = z.infer<typeof stealBonusesFormSchema>;
