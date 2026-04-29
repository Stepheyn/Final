import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: { main: '#FF0000' },
        secondary: { main: '#606060' },
        background: {
            default: '#171717',
            paper: '#444444',
        },
        text: {
            primary: '#d2d6e3',
            secondary: '#d2d6e3',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
    shape: {
        borderRadius: 8,
    },
});

export default theme;