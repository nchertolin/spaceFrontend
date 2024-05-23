import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { memo } from 'react';
import { IClient } from '@/entities/Client/model/IClient.ts';
import { EditClientFormScheme, editClientFormScheme } from '../models/types/editClientFormScheme.ts';
import { useEditClientMutation } from '../api/editClientApi.ts';
import { BaseButton, Field, PhoneField } from '@/shared/ui/Inputs';

interface EditClientFormProps {
    defaultValues: Omit<IClient, 'bonuses' | 'purchasesCount'>,

}

export const EditClientForm = memo((props: EditClientFormProps) => {
    const { defaultValues } = props;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<EditClientFormScheme>({
        defaultValues,
        resolver: zodResolver(editClientFormScheme),
    });

    const { isPending, editClient } = useEditClientMutation();

    return (
        <Stack
            width="100%"
            spacing={3}
            component="form"
            onSubmit={handleSubmit((data) => editClient({
                ...data, id: defaultValues.id,
            }))}
        >
            <Field
                {...register('name')}
                label="Имя"
                error={Boolean(errors.name)}
                helperText={errors.name?.message || ''}
            />

            <PhoneField
                register={register('phone')}
                defaultValue={defaultValues.phone}
                error={Boolean(errors.phone)}
                helperText={errors.phone?.message || ''}
            />

            <Field
                {...register('description')}
                label="Описание"
                multiline
                minRows={4}
            />

            <BaseButton variant="contained" type="submit" disabled={isPending}>
                Изменить
            </BaseButton>
        </Stack>
    );
});
