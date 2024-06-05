import React from 'react';

type Employee = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  hireDate: string;
  position: string;
  department: string;
  salary: number;
  hoursWorked: number;
};

const Card = ({ employee }: { employee: Employee }) => {
  return (
    <div className='p-4 bg-white shadow-md dark:bg-gray-800 rounded-lg'>
      <h2 className='text-lg font-medium text-gray-900 dark:text-white'>
        {employee.firstName} {employee.lastName}
      </h2>
      <p className='text-gray-600 dark:text-gray-300'>{employee.position}</p>
      <p className='text-gray-600 dark:text-gray-300'>{employee.department}</p>
      <p className='text-gray-600 dark:text-gray-300'>{employee.email}</p>
      <p className='text-gray-600 dark:text-gray-300'>Hired: {new Date(employee.hireDate).toLocaleDateString()}</p>
      <p className='text-gray-600 dark:text-gray-300'>Salary: ${employee.salary}</p>
      <p className='text-gray-600 dark:text-gray-300'>Hours Worked: {employee.hoursWorked}</p>
    </div>
  );
};

export  {Card};
