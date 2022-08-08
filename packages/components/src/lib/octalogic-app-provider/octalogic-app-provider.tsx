import { ThemeProvider, CssBaseline, CircularProgress } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { useNavigate, Navigate } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  ClerkLoading,
  ClerkProvider,
  SignedIn,
  SignedOut,
} from '@clerk/clerk-react';
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// import {
//   GoogleAuthProvider,
//   getAuth,
//   signInWithPopup,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   sendPasswordResetEmail,
//   signOut,
// } from 'firebase/auth';
import { dashboardRoutes, theme } from '@octalogic-admin/constants';

/* eslint-disable-next-line */
export interface OctalogicAppProviderProps {
  children: JSX.Element;
}

export function OctalogicAppProvider(props: OctalogicAppProviderProps) {
  const { children } = props;
  const navigate = useNavigate();
  const queryClient = new QueryClient();

  // const firebaseConfig = {
  //   apiKey: 'AIzaSyBsMfgsHNyypJnmf96tT0OLo8UMFY-ZMNE',
  //   authDomain: 'octalogic-portfolio-dev.firebaseapp.com',
  //   databaseURL: 'https://octalogic-portfolio-dev.firebaseio.com',
  //   projectId: 'octalogic-portfolio-dev',
  //   storageBucket: 'octalogic-portfolio-dev.appspot.com',
  //   messagingSenderId: '972342187770',
  //   appId: '1:972342187770:web:bf3ff2e8961d4459359b43',
  //   measurementId: 'G-BGS6FKEZTX',
  // };

  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

  return (
    <ClerkProvider
      frontendApi="clerk.humble.jennet-9.lcl.dev"
      navigate={(to) => navigate(to)}
    >
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
            <ClerkLoading>
              <CircularProgress />
            </ClerkLoading>
            <SignedIn>
              <Navigate to={dashboardRoutes.home} />
            </SignedIn>
            <SignedOut>
              <Navigate to={dashboardRoutes.authentication.login} />
            </SignedOut>

            <CssBaseline />
            {children}
          </SnackbarProvider>
        </ThemeProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ClerkProvider>
  );
}

export default OctalogicAppProvider;
