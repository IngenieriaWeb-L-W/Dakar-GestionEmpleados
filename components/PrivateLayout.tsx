import React, { ReactNode } from 'react';
import { useSession, signIn } from 'next-auth/react';

interface PrivateLayoutProps {
  children: ReactNode;
}

const PrivateLayout = ({ children }: PrivateLayoutProps) => {
  const { status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (status === 'unauthenticated') {
    signIn('auth0');
    return <div>Redirecting...</div>;
  }
  return <div>{children}</div>;
};

export { PrivateLayout };
