import {
    FormControl, InputLabel, MenuItem, Select, SelectProps,
} from '@mui/material';

export const BaseSelect = (props: SelectProps & { values: string[], helperText: string }) => {
    const { values, label, ...otherProps } = props;

    return (
        <FormControl>
            <InputLabel>{label}</InputLabel>
            <Select
                label={label}
                {...otherProps}
            >
                {values.map((value) => (
                    <MenuItem key={value} value={value}>
                        {value}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>

    );
};
