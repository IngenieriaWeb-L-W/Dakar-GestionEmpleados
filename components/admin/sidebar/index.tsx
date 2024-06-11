// components/Sidebar.tsx
import React from "react";
import Link from 'next/link';
import Image from "next/image";
import { useSession } from 'next-auth/react';

interface User {
  name?: string;
  email?: string;
  image?: string;
  rol?: string;  // Asegúrate de que el tipo User incluye `rol`
}

interface SidebarProps {
  user?: User;
}



const Sidebar: React.FC<SidebarProps> = ({ user }) => {
  const { data: session } = useSession();
  const currentUser: User = {
    name: user?.name ?? session?.user?.name ?? 'Usuario',
    email: user?.email ?? session?.user?.email ?? '',
    image: user?.image ?? session?.user?.image ?? '',
    rol: user?.rol ?? session?.user?.rol ?? ''
  };

  return (
    <div className="bg-gray-800 text-white h-screen w-64 flex flex-col items-center p-4">
      {currentUser.image ? (
        <Image
          src={currentUser.image}
          alt="User Avatar"
          width={96}
          height={96}
          className="rounded-full mb-4"
        />
      ) : (
        <div className="w-24 h-24 mb-4 bg-gray-700 rounded-full flex items-center justify-center">
          <Image
            className='object-cover w-24 h-24 mx-2 rounded-full'
            src='https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            alt='avatar'
            
          />
        </div>
      )}
      <div className="text-lg">{currentUser.name}</div>
      
      <Link href="/gestiontransacciones" className="text-white hover:text-gray-400 mt-4">
      Transactions
      </Link>
      
      <Link href="/maestro" className="text-white hover:text-gray-400 mt-4">
      Employee Master
      </Link>
      
      {currentUser.rol === 'ADMIN' && (
        <Link href="/users" className="text-white hover:text-gray-400 mt-4">
          Users
        </Link>
      )}
    </div>
  );
};

export { Sidebar };
