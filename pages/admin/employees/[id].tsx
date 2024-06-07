import React, { useEffect, useState } from 'react';
//import Select from 'react-select';
import { useQuery, useMutation, useLazyQuery } from '@apollo/client';
import { GET_EMPLOYEE } from '@/utils/graphql/queries/employees';
import { GET_DEPARTMENTS } from '@/utils/graphql/queries/departments';
import useFormData from '@/hooks/useFormData';
import {upsertEmployeeTransformation} from '@/utils/graphql/transformations/upsertEmployees';
import { UPSERT_EMPLOYEE } from '@/utils/graphql/mutations/employees';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { employeeType } from '@/types/global';
import { GetServerSideProps } from 'next';
//import {loading} from '@/components/home/loading';
import {Loading} from '@/components/Loading';
export const  getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      id: context.query.id,
    },
  };
}



{/*interface IDepartment {
    id: string;
    name: string;
    description: string;
  }*/}
  

const Index = ({ id }: { id: string }) => {
  //const [options, setOptions] = useState<ICategory[]>([]);
  const [employee, setEmployee] = useState<employeeType>({
    firstName: '',
    lastName: '',
    email: '',
    hireDate: '',
    position: '',
    department:'',
    salary: 0,
    hoursWorked: 0,
    id: '',
  });
  const { form, formData, updateFormData } = useFormData({});
  const router = useRouter();
  const { loading: loadingDepartments } = useQuery(GET_DEPARTMENTS);
  const [getEmployee, { loading: loadingLazyQuery }] = useLazyQuery(GET_EMPLOYEE, {
    fetchPolicy: 'cache-and-network',
    onCompleted: (data) => {
      //console.log(data);
      setEmployee(data.employee);
      
    },
  });
  const [upsertEmployee] = useMutation(UPSERT_EMPLOYEE);
  

  useEffect(() => {
    if (id !== 'new') getEmployee({ variables: { where: { id } } });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //console.log(formData);
    const { dataCreate, dataUpdate } = upsertEmployeeTransformation({
      formdata: { ...formData, department: formData.department || employee.department },
    });
    await upsertEmployee({
      variables: {
        where: {
          id: id === 'new' ? '' : id,
        },
        create: dataCreate,
        update: dataUpdate,
      },
    })
      .then(() => {
        router.push('/admin');
        toast.success('Employee saved');
      })
      .catch((e) => {
        toast.error('Error saving employee');
        console.error(e);
      });
  };

  if (loadingDepartments || loadingLazyQuery) return <Loading />;
  return (
    <div>
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
                  name='salary'
                  type='number'
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
                  name='hoursWorked'
                  type='number'
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
    </div>
  );
};

export default Index;
