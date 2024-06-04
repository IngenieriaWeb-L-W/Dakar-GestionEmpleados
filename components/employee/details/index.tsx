// components/employee/details/Details.tsx
import React from 'react';
import { EmployeeType } from '@/types/global';

interface DetailsProps {
  employee: EmployeeType;
}

const Details: React.FC<DetailsProps> = ({ employee }) => {
  return (
    <div>
      <section className='text-gray-600 body-font overflow-hidden bg-white shadow dark:bg-gray-900'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='lg:w-4/5 mx-auto flex flex-wrap'>
            <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
              <h1 className='text-white text-3xl title-font font-medium mb-1'>{employee.firstName} {employee.lastName}</h1>
              <h2 className='text-sm title-font text-gray-500 tracking-widest'>{employee.position}</h2>
              <p className='leading-relaxed'>{employee.department}</p>
              <p className='leading-relaxed'>Hired on: {new Date(employee.hireDate).toLocaleDateString()}</p>
              <p className='leading-relaxed'>Salary: ${employee.salary}</p>
              <p className='leading-relaxed'>Hours Worked: {employee.hoursWorked}</p>
              {/* Puedes añadir más detalles del empleado según sea necesario */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Details };
