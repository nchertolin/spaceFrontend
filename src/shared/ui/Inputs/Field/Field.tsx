import {
    InputAdornment, styled, TextField, TextFieldProps,
} from '@mui/material';
import { forwardRef, memo } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const StyledField = styled(TextField)<TextFieldProps>(({ theme }) => ({
    '&': {
        borderRadius: 'var(--border-radius)',
    },
    '& .MuiOutlinedInput-root': {
        backgroundColor: theme.palette.secondary.main,

        'fieldset, &:hover fieldset, &.Mui-focused fieldset': {
            borderColor: theme.palette.primary.dark,
        },
    },
}));

export const Field = memo(forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => (
    <StyledField
        autoComplete="off"
        {...props}
        ref={ref}
    />
)));

export const Search = (props: TextFieldProps) => (
    <StyledField
        autoComplete="off"
        InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <SearchIcon sx={{ color: 'primary.dark' }} />
                </InputAdornment>
            ),
        }}
        {...props}
    />
);
