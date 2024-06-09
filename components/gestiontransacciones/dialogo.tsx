import React, { useState } from 'react';

interface FormData {
  title: string;
  movementType: string;
  quantity: number;
}

interface DialogProps {
  onClose: () => void;
}

const Dialog: React.FC<DialogProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    movementType: '',
    quantity: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Envía los datos del formulario al servidor y cierra el diálogo
    // Luego, actualiza automáticamente la tabla de movimientos
    onClose();
  };

  return (
    <div>
      <h2>Agregar movimiento de inventario</h2>
        <form onSubmit={handleSubmit}>
          {(
            <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
              <div>
                <label className='text-black dark:text-black' htmlFor='title'>
                  Titulo
                </label>
                <input
                  id='title'
                  name='title'
                  type='text'
                  value={formData.title} 
                  onChange={handleChange}
                  className='block w-full px-4 py-2 mt-2 text-white bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
                />
              </div>

              <div>
                <label className='dark:text-black' htmlFor='tipomovimiento'>
                  Tipo de Movimiento:
                </label>                
                <select 
                id='tipomovimiento' 
                name="movementType" 
                value={formData.movementType} 
                onChange={handleChange}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
                >
                    <option value="entrada">Entrada</option>
                    <option value="salida">Salida</option>
                </select>
              </div>

              <div>
                <label className='dark:text-black' htmlFor='cantidad'>
                  Cantidad
                </label>
                <input
                  id='cantidad' 
                  type="number" name="quantity" 
                  value={formData.quantity} 
                  onChange={handleChange}                  
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
                />
              </div>

              
            </div>
          )}

          <div className='flex mt-6'>
          <button
              type='submit'
              className='px-8 mx-5 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
            >
              Crear movimiento
            </button>

            <button
              type='button'
              onClick={onClose}
              className='px-8 mx-5 py-2.5 leading-5 text-gray-800 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
            >
              Cancelar
            </button>   
          </div>
        </form>
    </div>
  );
};

export default Dialog;
