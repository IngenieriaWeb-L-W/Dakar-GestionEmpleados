import React from "react";
import Link from 'next/link';
import Image from "next/image";

interface User {
  name?: string;
  email?: string;
  image?: string;
}

interface SidebarProps {
  user?: User; // Hacer que user sea opcional para manejar el caso en que sea undefined
}

const Sidebar: React.FC<SidebarProps> = ({ user }) => {
  return (
    <div className="bg-gray-800 text-white h-screen w-64 flex flex-col items-center p-4">
      {user && user.image ? (
        <Image
          src={user.image}
          alt="User Avatar"
          width={96}
          height={96}
          className="rounded-full mb-4"
        />
      ) : (
        <div className="w-24 h-24 mb-4 bg-gray-700 rounded-full flex items-center justify-center">
          <span className="text-gray-500">No Image</span>
        </div>
      )}
      <p className="text-lg">{user?.name || 'Usuario'}</p>
      
      <Link href="/transactions" className="text-white hover:text-gray-400 mt-4">
        Transacciones
      </Link>
      
      <Link href="/masters" className="text-white hover:text-gray-400 mt-4">
        Maestros
      </Link>
      
      {user && (
        <Link href="/users" className="text-white hover:text-gray-400 mt-4">
          Usuarios
        </Link>
      )}
    </div>
  );
};

export { Sidebar };
