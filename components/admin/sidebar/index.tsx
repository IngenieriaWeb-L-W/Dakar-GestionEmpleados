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
  const currentUser = user || session?.user;

  return (
    <div className="bg-gray-800 text-white h-screen w-64 flex flex-col items-center p-4">
      {currentUser && currentUser.image ? (
        <Image
          src={currentUser.image}
          alt="User Avatar"
          width={96}
          height={96}
          className="rounded-full mb-4"
        />
      ) : (
        <div className="w-24 h-24 mb-4 bg-gray-700 rounded-full flex items-center justify-center">
          <img
            className='object-cover w-24 h-24 mx-2 rounded-full'
            src='https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            alt='avatar'
          />
        </div>
      )}
      <div className="text-lg">{currentUser?.name || 'Usuario'}</div>
      
      <Link href="/transactions" className="text-white hover:text-gray-400 mt-4">
        Transacciones
      </Link>
      
      <Link href="/masters" className="text-white hover:text-gray-400 mt-4">
        Maestros
      </Link>
      
      {currentUser && currentUser.rol === 'ADMIN' && (
        <Link href="/usuarios" className="text-white hover:text-gray-400 mt-4">
          Usuarios
        </Link>
      )}
    </div>
  );
};

export { Sidebar };
