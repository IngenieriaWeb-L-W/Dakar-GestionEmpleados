import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'; // Importa ApolloClient y otras dependencias
import { SessionProvider } from 'next-auth/react';
import { Layout } from '@/components/Layout';

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql', // Cambia la URL a tu endpoint GraphQL
  cache: new InMemoryCache(),
});

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <ApolloProvider client={client}> {/* Proporciona la instancia de ApolloClient */}
      <SessionProvider session={session}>
        {/* Aquí puedes seguir con el resto de tu componente */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </ApolloProvider>
  );
};

export default App;
