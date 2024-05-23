import InputMask from 'react-input-mask';
import { TextFieldProps } from '@mui/material';
import { Field } from '../Field/Field.tsx';

export const PhoneField = (props: TextFieldProps & { register: any }) => {
    const { register, defaultValue, ...otherProps } = props;

    return (
        <InputMask
            {...register}
            defaultValue={defaultValue}
            mask="+7 (999) 999-99-99"
            maskChar="_"
        >
            {
                (props: any) => (
                    <Field
                        {...props}
                        {...otherProps}
                        type="tel"
                        label="Телефон"
                        placeholder="+7 (999) 999-99-99"
                    />
                )
            }
        </InputMask>
    );
};
