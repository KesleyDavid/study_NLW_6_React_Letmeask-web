import { AuthContextProvider } from './contexts/AuthContexts';

import Routes from './routes';

function App() {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  );
}

export default App;
