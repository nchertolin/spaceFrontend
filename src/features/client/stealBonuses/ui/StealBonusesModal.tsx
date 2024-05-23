import { useState } from 'react';
import {
    Modal, Paper, Stack, Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BaseButton, Field } from '@/shared/ui/Inputs';
import { useStealBonusesMutation } from '../api/stealBonusesApi.ts';
import { StealBonusesFormSchema, stealBonusesFormSchema } from '../models/types/stealBonusesFormSchema.ts';

export const StealBonusesModal = (props: { id: number }) => {
    const { id } = props;
    const [open, setOpen] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<StealBonusesFormSchema>({
        resolver: zodResolver(stealBonusesFormSchema),
    });

    const toggleModal = () => {
        reset();
        setOpen((open) => !open);
    };

    const { isPending, stealBonuses } = useStealBonusesMutation(toggleModal);

    return (
        <>
            <BaseButton onClick={toggleModal} variant="outlined">
                Списать бонусы
            </BaseButton>
            <Modal
                open={open}
                onClose={toggleModal}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <Paper sx={{ p: 3, width: '400px' }} elevation={2}>
                    <Typography variant="body2" mb={3}>Списать бонусы</Typography>
                    <Stack
                        spacing={3}
                        component="form"
                    >
                        <Field
                            {...register('bonuses', { valueAsNumber: true })}
                            label="Количество"
                            placeholder="1000"
                            error={Boolean(errors.bonuses)}
                            helperText={errors.bonuses?.message || ''}
                            autoFocus
                        />
                        <Field
                            {...register('_bonuses', { valueAsNumber: true })}
                            label="Подтвердите количество"
                            placeholder="1000"
                            error={Boolean(errors._bonuses)}
                            helperText={errors._bonuses?.message || ''}
                        />
                        <BaseButton
                            variant="contained"
                            disabled={isPending}
                            onClick={handleSubmit((data) => stealBonuses({
                                id,
                                ...data,
                            }))}
                        >
                            Списать
                        </BaseButton>
                    </Stack>
                </Paper>
            </Modal>
        </>
    );
};
