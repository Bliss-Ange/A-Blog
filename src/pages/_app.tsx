// _app.tsx
import { AuthProvider } from '../../src/context/AuthContext';
import Header from '../../src/app/components/Header';
import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <CssBaseline />
      <Header />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
