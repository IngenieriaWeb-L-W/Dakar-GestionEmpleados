import React, { useState } from 'react';
import { User } from '@/types/global';

interface TRProps {
  user: User;
}

const TR: React.FC<TRProps> = ({ user }) => {
  const [roleId, setRoleId] = useState(user.roleId);

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newRoleId = event.target.value;
    setRoleId(newRoleId);
    // Aquí puedes agregar la lógica para actualizar el rol en la base de datos
  };

  return (
    <tr key={user.id}>
      <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap dark:text-gray-200'>
        {user.name}
      </td>
      <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap dark:text-gray-200'>
        {user.email}
      </td>
      <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap dark:text-gray-200'>
        <select value={roleId} onChange={handleRoleChange} className='form-select'>
          <option value='1'>ADMIN</option>
          <option value='2'>USER</option>
        </select>
      </td>
    </tr>
  );
};

export {TR};
