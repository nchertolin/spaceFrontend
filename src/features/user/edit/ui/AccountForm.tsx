import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { EditLoginFormSchema, editLoginFormSchema } from '../models/types/editLoginFormSchema.ts';
import { EditPasswordFormSchema, editPasswordFormSchema } from '../models/types/editPasswordFormSchema.ts';
import { BaseButton, Field } from '@/shared/ui/Inputs';
import { useAppSelector } from '@/app/providers/StoreProvider';
import { getUser } from '@/entities/User';

export const AccountForm = () => {
    const user = useAppSelector(getUser);

    const {
        register: registerLogin,
        handleSubmit: handleSubmitLogin,
        formState: { errors: errorsLogin },
    } = useForm<EditLoginFormSchema>({
        defaultValues: user,
        resolver: zodResolver(editLoginFormSchema),
    });

    const {
        register: registerPassword,
        handleSubmit: handleSubmitPassword,
        formState: { errors: errorsPassword },
    } = useForm<EditPasswordFormSchema>({
        resolver: zodResolver(editPasswordFormSchema),
    });

    return (
        <Stack spacing={3} width="30%">
            <Stack
                spacing={3}
                component="form"
                onSubmit={handleSubmitLogin((data) => console.log(data))}
            >
                <Field
                    {...registerLogin('login')}
                    label="Логин"
                    error={Boolean(errorsLogin.login)}
                    helperText={errorsLogin.login?.message || ''}
                />
                <Field
                    {...registerLogin('name')}
                    label="Имя"
                    error={Boolean(errorsLogin.login)}
                    helperText={errorsLogin.login?.message || ''}
                />
                <BaseButton variant="contained" type="submit">
                    Изменить логин
                </BaseButton>
            </Stack>
            <Stack
                spacing={3}
                component="form"
                onSubmit={handleSubmitPassword((data) => console.log(data))}
            >
                <Field
                    type="password"
                    {...registerPassword('password')}
                    label="Новый пароль"
                    error={Boolean(errorsPassword.password)}
                    helperText={errorsPassword.password?.message || ''}
                />
                <Field
                    type="password"
                    {...registerPassword('rpassword')}
                    label="Подтвердите новый пароль"
                    error={Boolean(errorsPassword.rpassword)}
                    helperText={errorsPassword.rpassword?.message || ''}
                />
                <BaseButton variant="contained" type="submit">
                    Изменить пароль
                </BaseButton>
            </Stack>
        </Stack>
    );
};
