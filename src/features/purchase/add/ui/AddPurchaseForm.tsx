import { Stack } from '@mui/material';
import { memo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { AddClientModal } from '@/features/client/add';

import { AddPurchaseFormSchema, addPurchaseFormSchema } from '../models/types/addPurchaseFormScheme';
import { useAddPurchaseMutation } from '../api/addPurchaseApi';
import {
    BaseAutocomplete, BaseButton, BaseDatePicker, Field,
} from '@/shared/ui/Inputs';
import { useClientsShortQuery } from '../api/getClientsApi';
import { useServicesQuery } from '../api/getServicesApi';
import { AddServiceModal } from '@/features/service/add/ui/AddServiceModal.tsx';

export const AddPurchaseForm = memo(() => {
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
        control,
    } = useForm<AddPurchaseFormSchema>({
        resolver: zodResolver(addPurchaseFormSchema),
    });

    const handleSuccessPost = () => {
        reset();
    };

    const { isLoading: isClientsLoading, data: clients } = useClientsShortQuery();
    const { isLoading: isServicesLoading, data: services } = useServicesQuery();
    const { isPending, addPurchase } = useAddPurchaseMutation(handleSuccessPost);

    return (
        <Stack
            spacing={3}
            width="30%"
            component="form"
            onSubmit={handleSubmit((data) => addPurchase(data))}
        >
            <Controller
                name="date"
                control={control}
                render={({ field }) => (
                    <BaseDatePicker
                        value={field.value || null}
                        onChange={field.onChange}
                        label="Дата"
                        slotProps={{
                            textField: {
                                error: Boolean(errors.date),
                                helperText: errors.date?.message || '',
                            },
                        }}
                    />
                )}
            />

            <Stack direction="row" sx={{ position: 'relative' }} alignItems="center">
                <BaseAutocomplete
                    label="Услуга"
                    data={services || []}
                    isLoading={isServicesLoading}
                    onChange={(_, value: any) => setValue('name', value || '')}
                    error={Boolean(errors.name)}
                    helperText={errors.name?.message || ''}
                />
                <AddServiceModal />
            </Stack>

            <Stack direction="row" sx={{ position: 'relative' }} alignItems="center">
                <BaseAutocomplete
                    label="Клиент"
                    data={clients || []}
                    isLoading={isClientsLoading}
                    onChange={(_, value: any) => setValue('clientId', value?.id || 0)}
                    error={Boolean(errors.clientId)}
                    helperText={errors.clientId?.message || ''}
                />
                <AddClientModal />
            </Stack>

            <Field
                {...register('note')}
                label="Заметка"
                placeholder="Например, клиент попросил в следующий раз сделать по-другому"
                multiline
                minRows={4}
            />

            <Field
                {...register('reward', { valueAsNumber: true })}
                label="Стоимость"
                placeholder="1000"
                type="number"
                error={Boolean(errors.reward)}
                helperText={errors.reward?.message || ''}
            />

            <BaseButton variant="contained" type="submit" disabled={isPending}>
                Добавить
            </BaseButton>
        </Stack>
    );
});
