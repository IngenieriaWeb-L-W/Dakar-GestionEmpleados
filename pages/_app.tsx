import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'; 
import { SessionProvider } from 'next-auth/react';
import { Layout } from '@/components/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'jotai';

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql', 
  cache: new InMemoryCache(),
});

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <ApolloProvider client={client}> {/* Proporciona la instancia de ApolloClient */}
      <SessionProvider session={session}>
        <Provider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ToastContainer
              position='top-right'
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme='dark'
            />
        </Provider>
        
      </SessionProvider>
    </ApolloProvider>
  );
};

export default App;
