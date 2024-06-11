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
      //console.log(data);
      setEmployee(data.employee);
    },
  });
  const [upsertEmployee] = useMutation(UPSERT_EMPLOYEE);

  useEffect(() => {
    if (id !== 'new') getEmployee({ variables: { where: { id } } });
  }, [getEmployee, id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //console.log(formData);
    const { dataCreate, dataUpdate } = upsertEmployeesTransformation({ formdata: formData });
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
      .catch((error: any) => { // Aquí especificamos el tipo de 'error'
        toast.error('Error saving employee');
        console.error(error);
      });
  };
  
  if (loadingLazyQuery) return <Loading />;
  return (
    <div>
      <section className='p-6 mx-auto bg-white  shadow-md dark:bg-gray-800'>
        <h2 className='text-lg font-semibold text-gray-700 capitalize dark:text-white'>
          Editar: {employee.firstName} {employee.lastName}
        </h2>

        <form ref={form} onChange={updateFormData} onSubmit={handleSubmit}>
          {employee && (
            <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
              {/* Tus inputs aquí */}
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
