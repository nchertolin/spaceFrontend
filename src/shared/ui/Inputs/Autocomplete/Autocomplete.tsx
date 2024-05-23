import { Autocomplete, CircularProgress, TextFieldProps } from '@mui/material';
import { memo } from 'react';
import { Field } from '../Field/Field.tsx';

interface BaseAutocompleteProps {
    readonly data: any[];
    readonly isLoading?: boolean;
    readonly onChange?: (_: any, value: any) => void;
}

export const BaseAutocomplete = memo(
    (props: BaseAutocompleteProps & Omit<TextFieldProps, 'onChange'>) => {
        const {
            data, isLoading, error, helperText, onChange, label,
        } = props;

        return (
            <Autocomplete
                onChange={onChange}
                fullWidth
                disablePortal
                options={data}
                loading={isLoading}
                renderInput={(params) => (
                    <Field
                        {...params}
                        placeholder="Для поиска введите текст"
                        label={label}
                        error={error}
                        helperText={helperText}
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (isLoading
                                ? (<CircularProgress size={24} />)
                                : params.InputProps.endAdornment
                            ),
                        }}
                    />
                )}

            />
        );
    },
);
