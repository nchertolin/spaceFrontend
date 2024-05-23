import {
    Modal, Paper, Stack, Typography,
} from '@mui/material';
import { memo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AddServiceFormScheme, addServiceFormScheme } from '../models/types/addServiceFormScheme.ts';
import { useAddServiceMutation } from '../api/addServiceApi.ts';
import { BaseButton, Field } from '@/shared/ui/Inputs';

export const AddServiceModal = memo(() => {
    const [open, setOpen] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<AddServiceFormScheme>({
        resolver: zodResolver(addServiceFormScheme),
    });

    const toggleModal = () => setOpen((open) => !open);
    const handleSuccessPost = () => {
        reset();
        toggleModal();
    };
    const { isPending, addService } = useAddServiceMutation(handleSuccessPost);

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
                Услуги нет в списке?
            </BaseButton>
            <Modal
                open={open}
                onClose={toggleModal}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                }}
            >
                <Paper
                    sx={(theme) => ({
                        p: 3,
                        width: '400px',
                        borderRadius: theme.spacing(2),
                    })}
                >
                    <Typography variant="body2" mb={3}>Новая услуга</Typography>
                    <Stack
                        spacing={3}
                        component="form"
                    >
                        <Field
                            autoFocus
                            {...register('name')}
                            label="Название"
                            placeholder="Неизвестная услуга"
                            error={Boolean(errors.name)}
                            helperText={errors.name?.message || ''}
                        />
                        <BaseButton
                            variant="contained"
                            disabled={isPending}
                            onClick={handleSubmit((data) => addService(data))}
                        >
                            Добавить
                        </BaseButton>
                    </Stack>
                </Paper>
            </Modal>
        </>
    );
});
