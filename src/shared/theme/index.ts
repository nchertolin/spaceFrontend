import { createTheme } from '@mui/material';

import { shadows } from './shadows';
import { typography } from './typography';

export const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            paper: '#19181D',
            default: '#121212',
        },
        primary: {
            main: '#ffffff',
            dark: '#555555',
        },
        secondary: {
            main: '#1F1D23',
            dark: '#141317',
        },
        success: {
            main: '#0acd4d',
        },
        error: {
            main: '#F55357',
            light: '#F7C3C5',
        },
    },
    shadows,
    typography,
    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#555555',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: `inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075),
                0 0 0 1px hsla(0, 0%, 0%, 0.05),
                0 0.3px 0.4px hsla(0, 0%, 0%, 0.02),
                0 0.9px 1.5px hsla(0, 0%, 0%, 0.045),
                0 3.5px 6px hsla(0, 0%, 0%, 0.09)`,
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                option: {
                    backgroundColor: 'none',
                },
            },
        },
    },
});
