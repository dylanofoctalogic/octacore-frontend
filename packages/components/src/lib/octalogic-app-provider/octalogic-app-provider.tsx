import { ThemeProvider, CssBaseline } from '@mui/material';
import { SnackbarProvider } from 'notistack';

import { theme } from '@octalogic-admin/constants';

/* eslint-disable-next-line */
export interface OctalogicAppProviderProps {
  children: JSX.Element;
}

export function OctalogicAppProvider(props: OctalogicAppProviderProps) {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        hideIconVariant
      >
        <CssBaseline />
        {children}
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default OctalogicAppProvider;
