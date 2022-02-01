import { createTheme } from '@mui/material';

let theme = createTheme({
  shape: {
    borderRadius: 4,
  },
  palette: {
    text: {
      primary: '#333',
    },
    type: 'light',
    primary: {
      main: '#334ACC',
      dark: '#223289',
      light: '#e6f0fd',
      contrastText: '#fff',
    },
    secondary: {
      main: '#E8EAF6',
      dark: '#C5CAE9',
      light: '#e6f0fd',
      contrastText: '#fff',
    },
    error: {
      main: '#FF5D5D',
      light: '#FCECE6',
      contrastText: '#fff',
    },
    success: {
      main: '#00A980',
      light: '#DBEBDB',
      contrastText: '#fff',
    },
    warning: {
      main: '#FFA726',
      light: '#FFF5D2',
      contrastText: '#fff',
    },
    background: {
      default: '#F8F8F8',
    },
  },
});

theme = createTheme(theme, {
  typography: {
    fontSize: 16,
    fontWeightLight: 300,
    h1: {
      fontWeight: 700,
      lineHeight: 1.2,
      fontSize: '2.25rem',
      letterSpacing: '-0.1rem',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.074rem',
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.728rem',
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.44rem',
    },
    h5: {
      fontSize: '1.44rem',
    },
    h6: {
      fontSize: '1.44rem',
    },
    body1: {
      fontSize: '1.2rem',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          color: '#333',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
          color: theme.palette.grey['500'],
          ':hover': {
            borderRadius: 0,
            backgroundColor: 'transparent',
            color: theme.palette.primary.main,
          },
          '&.Mui-selected': {
            borderRadius: 0,
            backgroundColor: 'transparent',
            borderBottom: '2px solid #0666eb',
            color: theme.palette.primary.main,
          },
          '.MuiTypography-root': {
            fontWeight: '500',
            fontSize: '14px',
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter, sans-serif',
          textTransform: 'Capitalize',
          lineHeight: '22px',
          padding: '8px 14px',
          borderRadius: '4px',
          boxShadow: 'none',
          cursor: 'pointer',
          ':hover': {
            boxShadow: 'none',
          },
          ':active': {
            boxShadow: 'none',
          },
          '&.Mui-disabled': {
            backgroundColor: `rgba(${theme.palette.text.secondary}, 0.07)`,
            cursor: 'disabled',
          },
        },
        outlinedPrimary: {
          fontWeight: 600,
          backgroundColor: theme.palette.secondary.main,
          border: 'none',
          '&:hover, &:active': {
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.primary.dark,
            border: 'none',
          },
          '&:disabled': {
            backgroundColor: `rgba(${theme.palette.text.secondary}, 0.07)`,
            border: 'none',
          },
        },
        containedError: {
          fontWeight: 600,
          backgroundColor: theme.palette.error.light,
          color: theme.palette.error.main,
          '&:hover': {
            backgroundColor: theme.palette.error.main,
            color: theme.palette.error.contrastText,
          },
          '&:active': {
            backgroundColor: theme.palette.error.light,
            color: theme.palette.error.main,
          },
        },
        outlinedError: {
          fontWeight: 600,
          border: `1px solid ${theme.palette.error.main}`,
          '&:hover, &:active': {
            backgroundColor: theme.palette.error.light,
          },
        },
        containedSuccess: {
          backgroundColor: theme.palette.success.light,
          color: theme.palette.success.main,
          fontWeight: 600,
          '&:hover': {
            backgroundColor: theme.palette.success.main,
            color: theme.palette.success.contrastText,
          },
          '&:active': {
            backgroundColor: theme.palette.success.light,
            color: theme.palette.success.main,
          },
        },
        outlinedSuccess: {
          fontWeight: 600,
          border: `1px solid ${theme.palette.success.main}`,
          '&:hover, &:active': {
            backgroundColor: theme.palette.success.light,
          },
        },
        containedWarning: {
          backgroundColor: theme.palette.warning.light,
          color: theme.palette.warning.dark,
          fontWeight: 600,
          '&:hover': {
            backgroundColor: theme.palette.warning.main,
            color: theme.palette.warning.contrastText,
          },
          '&:active': {
            backgroundColor: theme.palette.warning.light,
            color: theme.palette.warning.dark,
          },
        },
        outlinedWarning: {
          fontWeight: 600,
          border: `1px solid ${theme.palette.warning.main}`,
          '&:hover, &:active': {
            backgroundColor: theme.palette.warning.light,
          },
        },
        startIcon: {
          padding: '0',
          margin: '0',
          '*:nth-of-type(1)': {
            fontSize: '20px',
            marginRight: '3px',
          },
        },

        endIcon: {
          padding: '0',
          margin: '0 5px',
          '*:nth-of-type(1)': {
            fontSize: '10px',
            padding: '0',
            margin: '6px 5px',
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#33333350',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '40px 32px',
          border: 'none',
          boxShadow: theme.shadows[3],
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: '0',
          fontSize: '24px',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '0',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
        },
      },
    },
  },
});

export { theme };
