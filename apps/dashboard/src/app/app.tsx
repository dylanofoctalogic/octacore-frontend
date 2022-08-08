import { OctalogicAppProvider } from '@octalogic-admin/components';
import { Router } from '../router';


export function App() {
  return (
    <OctalogicAppProvider>
      <Router />
    </OctalogicAppProvider>
  );
}

export default App;
