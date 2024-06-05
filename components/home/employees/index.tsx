import React, { useState } from 'react';
import {Card }from './card';
import { useQuery } from '@apollo/client';
import { GET_EMPLOYEES } from '@/utils/graphql/queries/employees';

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

const Employees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const { loading } = useQuery(GET_EMPLOYEES, {
    variables: {
      take: 10,
      skip: 0,
    },
    fetchPolicy: 'cache-and-network',
    onCompleted: (data) => {
      setEmployees(data.employees);
      //console.log('data :>> ', data);
    },
  });

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <section className='text-gray-600 body-font bg-white shadow dark:bg-gray-900'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4 gap-5 justify-center items-center'>
            {employees.map((employee: Employee) => (
              <Card key={employee.id} employee={employee} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export {Employees};
