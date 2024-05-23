import { z } from 'zod';

const REQUIRED_MESSAGE = 'Обязательное поле';

export const addPurchaseFormSchema = z.object({
    date: z.date({ required_error: REQUIRED_MESSAGE }),
    name: z.string({ required_error: REQUIRED_MESSAGE })
        .min(1, { message: REQUIRED_MESSAGE }),
    clientId: z.number({ required_error: REQUIRED_MESSAGE })
        .min(1, { message: REQUIRED_MESSAGE }),
    note: z.string(),
    reward: z.number({ invalid_type_error: REQUIRED_MESSAGE })
        .min(1, { message: REQUIRED_MESSAGE }),
});

export type AddPurchaseFormSchema = z.infer<typeof addPurchaseFormSchema>;
