import {
    Modal, Paper, Stack, Typography,
} from '@mui/material';
import { memo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { AddClientFormSchema, addClientFormSchema } from '../models/types/addClientFormScheme.ts';
import { useAddClientMutation } from '../api/addClientApi.ts';
import { BaseButton, Field, PhoneField } from '@/shared/ui/Inputs';

export const AddClientModal = memo(() => {
    const [open, setOpen] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<AddClientFormSchema>({
        resolver: zodResolver(addClientFormSchema),
    });

    const toggleModal = () => setOpen((open) => !open);
    const handleSuccessPost = () => {
        reset();
        toggleModal();
    };
    const { isPending, addClient } = useAddClientMutation(handleSuccessPost);

    return (
        <>
            <BaseButton
                onClick={toggleModal}
                sx={{
                    color: 'primary.dark',
                    backgroundColor: 'secondary.main',
                    position: 'absolute',
                    left: '105%',
                    width: '200px',
                }}
            >
                Новый клиент?
            </BaseButton>
            <Modal
                open={open}
                onClose={toggleModal}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <Paper
                    sx={(theme) => ({
                        p: 3,
                        width: '400px',
                        borderRadius: theme.spacing(2),
                    })}
                >
                    <Typography variant="body2" mb={3}>Новый клиент</Typography>
                    <Stack
                        spacing={3}
                        component="form"
                    >
                        <Field
                            autoFocus
                            {...register('name')}
                            label="Имя"
                            placeholder="Иванов Иван Иванович"
                            error={Boolean(errors.name)}
                            helperText={errors.name?.message || ''}
                        />
                        <PhoneField
                            register={register('phone')}
                            error={Boolean(errors.phone)}
                            helperText={errors.phone?.message || ''}
                        />

                        <Field
                            {...register('description')}
                            label="Заметка"
                            placeholder="Дополнительная информация о клиенте"
                            multiline
                            minRows={4}
                        />
                        <BaseButton
                            variant="contained"
                            disabled={isPending}
                            onClick={handleSubmit((data) => addClient(data))}
                        >
                            Добавить
                        </BaseButton>
                    </Stack>
                </Paper>
            </Modal>
        </>
    );
});
