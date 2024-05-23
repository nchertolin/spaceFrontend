export const getFormattedValue = (value: number, flag: boolean) => (flag
    ? `+${value}`
    : value);
