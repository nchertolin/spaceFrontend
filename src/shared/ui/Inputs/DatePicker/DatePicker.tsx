import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { ru } from 'date-fns/locale/ru';

export const BaseDatePicker = (props: DatePickerProps<any>) => (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
        <DatePicker
            format="dd MMMM yyyy"
            sx={(theme) => ({
                '& .MuiOutlinedInput-root': {
                    backgroundColor: theme.palette.secondary.main,
                    'fieldset, &:hover fieldset, &.Mui-focused fieldset': {
                        borderColor: theme.palette.primary.dark,
                    },
                },
                '& .MuiIconButton-root': {
                    color: 'primary.dark',
                },
            })}
            {...props}
        />
    </LocalizationProvider>
);
