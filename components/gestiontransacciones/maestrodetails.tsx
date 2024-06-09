// MaestroDetails.tsx
import React from 'react';
import { Maestro } from '@/types/global'; // Asegúrate de que la ruta sea correcta

interface MaestroDetailsProps {
  maestro: Maestro;
}

const MaestroDetails: React.FC<MaestroDetailsProps> = ({ maestro }) => {
  return (
    <div className="p-4 bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Detalles del Maestro</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-300">ID: {maestro.id}</p>
      <p className="mt-2 text-gray-600 dark:text-gray-300">Nombre: {maestro.name}</p>
      {/* Aquí puedes agregar más detalles si es necesario */}
    </div>
  );
};

export default MaestroDetails;
