// pages/gestiontransacciones.tsx
import { useState } from 'react';
import Dropdown from '@/components/gestiontransacciones/dropdown';
import MaestroDetails from '@/components/gestiontransacciones/maestrodetails';
import Dialog from '@/components/gestiontransacciones/dialogo'; 
import { Maestro } from '@/types/global';
import { useRouter } from 'next/router';
import Dashboard from '@/components/gestiontransacciones/dashboard';

const maestros: Maestro[] = [
  { id: 1, name: 'Gestión de la información del empleado' },
  { id: 2, name: 'Registro de horas trabajadas' },
  { id: 3, name: 'Gestión de nóminas' },
  { id: 4, name: 'Evaluación del desempeño' },
];

const GestionDeTransacciones: React.FC = () => {
  const [selectedMaestro, setSelectedMaestro] = useState<Maestro>(maestros[0]);
  const router = useRouter();

  const handleSelect = (maestro: Maestro) => {
    setSelectedMaestro(maestro);
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div>
      <h1>Gestión de Transacciones</h1>
      <Dropdown maestros={maestros} onSelect={handleSelect} />
      <div>
        <MaestroDetails maestro={selectedMaestro} />
      </div>
      
            {/* Botón para abrir el diálogo */}
            <button onClick={openDialog}
            className='flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>Agregar movimiento</button>

            {/* Diálogo para agregar un nuevo movimiento */}
            {isDialogOpen && <Dialog onClose={closeDialog} />}

            <Dashboard/>
    </div>
  );

  
};

export default GestionDeTransacciones;
