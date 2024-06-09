// components/gestiontransacciones/MaestroDetails.tsx
import React from 'react';
import { Maestro } from '@/types/global';

interface MaestroDetailsProps {
  maestro: Maestro;
}

const MaestroDetails: React.FC<MaestroDetailsProps> = ({ maestro }) => {
  const renderDetails = () => {
    switch (maestro.name) {
      case 'Gestión de la información del empleado':
        return (
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg mb-8">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900 text-white">
                    <tr>
                        <th className="bg-gray-50 dark:bg-gray-800 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                            ID del empleado
                        </th>
                        <td className="px-6 py-3">123</td>
                    </tr>
                    <tr>
                        <th className="bg-gray-50 dark:bg-gray-800 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                            Nombre completo
                        </th>
                        <td className="px-6 py-3">John Doe</td>
                    </tr>
                    <tr>
                        <th className="bg-gray-50 dark:bg-gray-800 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                            Posición
                        </th>
                        <td className="px-6 py-3">Desarrollador Senior</td>
                    </tr>
                </tbody>
            </table>
        </div>
        );
        case 'Registro de horas trabajadas':
            return (
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg mb-8">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900 text-white">
                    <tr>
                      <th className="bg-gray-50 dark:bg-gray-800 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        ID del empleado
                      </th>
                      <td className="px-6 py-3">456</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-50 dark:bg-gray-800 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Fecha
                      </th>
                      <td className="px-6 py-3">2024-06-09</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-50 dark:bg-gray-800 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Total de horas trabajadas
                      </th>
                      <td className="px-6 py-3">8</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          case 'Gestión de nóminas':
            return (
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg mb-8">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900 text-white">
                    <tr>
                      <th className="bg-gray-50 dark:bg-gray-800 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        ID del empleado
                      </th>
                      <td className="px-6 py-3">789</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-50 dark:bg-gray-800 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Período de pago
                      </th>
                      <td className="px-6 py-3">Junio 2024</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-50 dark:bg-gray-800 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Pago neto
                      </th>
                      <td className="px-6 py-3">$1500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          case 'Evaluación del desempeño':
            return (
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg mb-8">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900 text-white">
                    <tr>
                      <th className="bg-gray-50 dark:bg-gray-800 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        ID del empleado
                      </th>
                      <td className="px-6 py-3">101112</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-50 dark:bg-gray-800 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Fecha de la evaluación
                      </th>
                      <td className="px-6 py-3">2024-06-09</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-50 dark:bg-gray-800 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Logros
                      </th>
                      <td className="px-6 py-3">Excelente desempeño en el proyecto XYZ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>{maestro.name}</h2>
      {renderDetails()}
    </div>
  );
};

export default MaestroDetails;
