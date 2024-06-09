import { useState } from 'react';
import Dropdown from '@/components/gestiontransacciones/dropdown';
import MaestroDetails from '@/components/gestiontransacciones/maestrodetails'; // Asegúrate de que la ruta sea correcta
import { Maestro } from '@/types/global';

const maestros: Maestro[] = [
  { id: 1, name: 'Gestión de la información del empleado' },
  { id: 2, name: 'Registro de horas trabajadas' },
  { id: 3, name: 'Gestión de nóminas' },
  { id: 4, name: 'Evaluación del desempeño' },
];

const GestionDeTransacciones: React.FC = () => {
  const [selectedMaestro, setSelectedMaestro] = useState<Maestro>(maestros[0]);

  const handleSelect = (maestro: Maestro) => {
    setSelectedMaestro(maestro);
    // Aquí puedes agregar cualquier lógica adicional al seleccionar un maestro
  };

  return (
    <div>
      <h1>Gestión de Transacciones</h1>
      <Dropdown maestros={maestros} onSelect={handleSelect} />
      <div>
        <h2>Maestro seleccionado:</h2>
        <MaestroDetails maestro={selectedMaestro} />
        {/* Aquí puedes agregar la lógica para mostrar la información del maestro seleccionado */}
      </div>
    </div>
  );
};

export default GestionDeTransacciones;
