import React, { useEffect, useState } from 'react';
import { useMutation, useLazyQuery } from '@apollo/client';
import { GET_EMPLOYEE } from '@/utils/graphql/queries/employees';
import useFormData from '@/hooks/useFormData';
import { upsertEmployeesTransformation } from '@/utils/graphql/transformations/upsertEmployees';
import { UPSERT_EMPLOYEE } from '@/utils/graphql/mutations/employees';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { employeeType } from '@/types/global';
import { Loading } from '@/components/Loading';
import { PrivateLayout } from '@/components/PrivateLayout';


const Index = ({ id }: { id: string }) => {
  const [employee, setEmployee] = useState<employeeType>({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    hireDate: '',
    position: '',
    department: '',
    salary: 0,
    hoursWorked: 0,
  });
  const { form, formData, updateFormData } = useFormData({});
  const router = useRouter();
  const [getEmployee, { loading: loadingLazyQuery }] = useLazyQuery(GET_EMPLOYEE, {
    fetchPolicy: 'cache-and-network',
    onCompleted: (data) => {
      // console.log(data);
      setEmployee(data.employee);
    },
  });
  const [upsertEmployee] = useMutation(UPSERT_EMPLOYEE);

  useEffect(() => {
    if (id !== 'new') getEmployee({ variables: { where: { id } } });
  }, [getEmployee, id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(formData);
    const { dataCreate, dataUpdate } = upsertEmployeesTransformation({ formdata: formData });
    try {
      await upsertEmployee({
        variables: {
          where: {
            id: id === 'new' ? '' : id,
          },
          create: dataCreate,
          update: dataUpdate,
        },
      });
      router.push('/admin');
      toast.success('Employee saved');
    } catch (error: unknown) { // Usamos 'unknown' para capturar el error y luego hacer una verificación de tipo
      if (error instanceof Error) {
        toast.error('Error saving employee');
        console.error(error.message);
      }
    }
  };
  
  if (loadingLazyQuery) return <Loading />;
  return (
    <div>
    <PrivateLayout>
      <section className='p-6 mx-auto bg-white shadow-md dark:bg-gray-800'>
        <h2 className='text-lg font-semibold text-gray-700 capitalize dark:text-white'>
          Editar: {employee.firstName} {employee.lastName}
        </h2>

        <form ref={form} onChange={updateFormData} onSubmit={handleSubmit}>
          {employee && (
            <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
               <div>
                <label className='text-gray-700 dark:text-gray-200' htmlFor='firstName'>
                  First Name
                </label>
                <input
                  id='firstName'
                  name='firstName'
                  type='text'
                  defaultValue={employee.firstName}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
                />
              </div>

              <div>
                <label className='text-gray-700 dark:text-gray-200' htmlFor='lastName'>
                  Last Name
                </label>
                <input
                  id='lastName'
                  name='lastName'
                  type='text'
                  defaultValue={employee.lastName}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
                />
              </div>

              <div>
                <label className='text-gray-700 dark:text-gray-200' htmlFor='email'>
                  Email
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  defaultValue={employee.email}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
                />
              </div>

              <div>
                <label className='text-gray-700 dark:text-gray-200' htmlFor='hireDate'>
                  Hire Date
                </label>
                <input
                  id='hireDate'
                  name='hireDate'
                  type='date'
                  defaultValue={employee.hireDate}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
                />
              </div>

              <div>
                <label className='text-gray-700 dark:text-gray-200' htmlFor='position'>
                  Position
                </label>
                <input
                  id='position'
                  name='position'
                  type='text'
                  defaultValue={employee.position}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
                />
              </div>

              <div>
                <label className='text-gray-700 dark:text-gray-200' htmlFor='department'>
                  Department
                </label>
                <input
                  id='department'
                  name='department'
                  type='text'
                  defaultValue={employee.department}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
                />
              </div>

              <div>
                <label className='text-gray-700 dark:text-gray-200' htmlFor='salary'>
                  Salary
                </label>
                <input
                  id='salary'
                  type='number'
                  name='salary'
                  defaultValue={employee.salary}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
                />
              </div>

              <div>
                <label className='text-gray-700 dark:text-gray-200' htmlFor='hoursWorked'>
                  Hours Worked
                </label>
                <input
                  id='hoursWorked'
                  type='number'
                  name='hoursWorked'
                  defaultValue={employee.hoursWorked}
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
              Save
            </button>
            <button
              type='button'
              onClick={() => router.push('/admin')}
              className='px-8 mx-5 py-2.5 leading-5 text-gray-800 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
            >
              Cancelar
            </button>
          </div>
        </form>
      </section>
    </PrivateLayout>
      
    </div>
  );
};

export default Index;
