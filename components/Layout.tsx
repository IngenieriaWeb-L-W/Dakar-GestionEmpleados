import React, { ReactNode } from 'react';
import { Navbar } from './navbar';
import { Footer } from './home/footer';
//import { useSession } from 'next-auth/react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  //const { data: session } = useSession();

  if (process.env.NODE_ENV === 'development') {
    //console.log('session', session);
  }

  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export { Layout };
