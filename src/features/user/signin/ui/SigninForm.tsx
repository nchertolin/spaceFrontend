import { IconButton, InputAdornment, Stack } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { memo, useState } from 'react';
import { signinFormSchema, SigninFormSchema } from '../models/types/signinFormScheme.ts';
import { BaseButton, Field } from '@/shared/ui/Inputs';
import { useSigninMutation } from '../api/signinApi.ts';

export const SigninForm = memo(() => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SigninFormSchema>({
        resolver: zodResolver(signinFormSchema),
    });

    const { isPending, signin } = useSigninMutation();
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <Stack
            width="350px"
            spacing={3}
            component="form"
            onSubmit={handleSubmit((data) => signin(data))}
        >
            <Field
                {...register('login')}
                label="Логин"
                placeholder="admin"
                error={Boolean(errors.login)}
                helperText={errors.login?.message || ''}
                autoFocus
            />
            <Field
                {...register('password')}
                label="Пароль"
                type={showPassword ? 'text' : 'password'}
                error={Boolean(errors.password)}
                helperText={errors.password?.message || ''}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleClickShowPassword}>
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <BaseButton variant="contained" type="submit" disabled={isPending}>
                Войти
            </BaseButton>
        </Stack>
    );
});
