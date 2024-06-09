// components/gestiontransacciones/MovimientosTable.tsx
import React from 'react';
import { Movimiento } from '@/types/global';

interface MovimientosTableProps {
  movimientos: Movimiento[];
}

const MovimientosTable: React.FC<MovimientosTableProps> = ({ movimientos }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="w-1/4 px-4 py-2">ID</th>
            <th className="w-1/4 px-4 py-2">Fecha</th>
            <th className="w-1/4 px-4 py-2">Cantidad</th>
            <th className="w-1/4 px-4 py-2">Ejecutor</th>
          </tr>
        </thead>
        <tbody>
          {movimientos.map((movimiento) => (
            <tr key={movimiento.id}>
              <td className="border px-4 py-2">{movimiento.id}</td>
              <td className="border px-4 py-2">{new Date(movimiento.fecha).toLocaleDateString()}</td>
              <td className="border px-4 py-2">{movimiento.cantidad}</td>
              <td className="border px-4 py-2">{movimiento.ejecutor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovimientosTable;
