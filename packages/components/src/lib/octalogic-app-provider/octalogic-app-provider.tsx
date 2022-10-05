import { ThemeProvider, CssBaseline } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { theme } from '@octalogic-admin/constants';

/* eslint-disable-next-line */
export interface OctalogicAppProviderProps {
  children: JSX.Element;
}

export function OctalogicAppProvider(props: OctalogicAppProviderProps) {
  const { children } = props;
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default OctalogicAppProvider;
