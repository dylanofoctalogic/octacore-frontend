import { ThemeProvider } from '@mui/material';
import { theme } from '@octalogic-admin/constants';
import { Router } from '../router';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
