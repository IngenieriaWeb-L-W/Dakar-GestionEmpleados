import React from 'react';
import { Navbar } from './navbar';
import { Footer } from './home/footer';
//import { useSession } from 'next-auth/react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  //const { data: session } = useSession();
  // Eliminar el console.log para evitar el error "Unexpected console statement"
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export { Layout };
