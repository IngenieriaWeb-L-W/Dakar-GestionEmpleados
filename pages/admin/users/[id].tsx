import React, { useEffect, useState } from 'react';
import { useMutation, useLazyQuery } from '@apollo/client';
import { GET_USER } from '@/utils/graphql/queries/users'; 
import useFormData from '@/hooks/useFormData';
import { upsertUserTransformation } from '@/utils/graphql/transformations/usertUsers'; 
import { UPSERT_USER } from '@/utils/graphql/mutations/users'; 
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { User } from '@/types/global'; 
import { Loading } from '@/components/Loading'; 
import { GetServerSideProps } from 'next';
import { PrivateLayout } from '@/components/PrivateLayout'


// Definir el tipo de cxt como GetServerSidePropsContext para obtener las props en tiempo de servidor
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      id: context.query.id,
    },
  };
};

const UserForm = ({ id }: { id: string }) => {
  const [user, setUser] = useState<User>({
    id: '',
    name: '',
    email: '',
    image: '',
    roleId: '2', // Assuming '2' is the default role (User)
  });

  const { form, formData, updateFormData } = useFormData({});
  const router = useRouter();
  const [getUser, { loading: loadingLazyQuery }] = useLazyQuery(GET_USER, {
    fetchPolicy: 'cache-and-network',
    onCompleted: (data) => {
      // console.log(data);
      setUser(data.user);
    },
  });
  const [upsertUser] = useMutation(UPSERT_USER);

  useEffect(() => {
    if (id !== 'new') getUser({ variables: { where: { id } } });
  }, [getUser, id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(formData);
    const { dataCreate, dataUpdate } = upsertUserTransformation({ formdata: formData });
    try {
      await upsertUser({
        variables: {
          where: {
            id: id === 'new' ? '' : id,
          },
          create: dataCreate,
          update: dataUpdate,
        },
      });
      router.push('/admin');
      toast.success('User saved');
    } catch (error: unknown) { // Usamos 'unknown' para capturar el error y luego hacer una verificación de tipo
      if (error instanceof Error) {
        toast.error('Error saving user');
        //console.error(error.message);
      }
    }
  };

  if (loadingLazyQuery) return <Loading />;
  return (
    <div>
    <PrivateLayout>
      <section className='p-6 mx-auto bg-white shadow-md dark:bg-gray-800'>
        <h2 className='text-lg font-semibold text-gray-700 capitalize dark:text-white'>
          Editar: {user.name}
        </h2>

        <form ref={form} onChange={updateFormData} onSubmit={handleSubmit}>
          {user && (
            <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                <div>
                <label className='text-gray-700 dark:text-gray-200' htmlFor='id'>
                  Id
                </label>
                <input
                  id='id'
                  name='id'
                  type='text'
                  defaultValue={user.id}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
                />
              </div>

              <div>
                <label className='text-gray-700 dark:text-gray-200' htmlFor='name'>
                  Name
                </label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  defaultValue={user.name}
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
                  type='text'
                  defaultValue={user.email}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
                />
              </div>

              <div>
                <label className='text-gray-700 dark:text-gray-200' htmlFor='image'>
                  Image URL
                </label>
                <input
                  id='image'
                  name='image'
                  type='text'
                  defaultValue={user.image}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
                />
              </div>

              <div>
                <label className='text-gray-700 dark:text-gray-200' htmlFor='roleId'>
                  Role
                </label>
                <select
                  id='roleId'
                  name='roleId'
                  typeof='text'
                  defaultValue={user.roleId}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
                >
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                </select>
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

export default UserForm;
