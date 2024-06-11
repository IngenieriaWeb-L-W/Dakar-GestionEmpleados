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


export async function getServerSideProps(cxt: any) {
    return {
      props: {
        id: cxt.query.id,
      },
    };
  }
  
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
      console.log(data);
      setUser(data.user);
    },
  });
  const [upsertUser] = useMutation(UPSERT_USER);

  useEffect(() => {
    if (id !== 'new') getUser({ variables: { where: { id } } });
  }, [getUser, id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    const { dataCreate, dataUpdate } = upsertUserTransformation({ formdata: formData });
    await upsertUser({
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
        toast.success('User saved');
      })
      .catch((error: any) => {
        toast.error('Error saving user');
        console.error(error);
      });
  };

  if (loadingLazyQuery) return <Loading />;
  return (
    <div>
      <section className='p-6 mx-auto bg-white shadow-md dark:bg-gray-800'>
        <h2 className='text-lg font-semibold text-gray-700 capitalize dark:text-white'>
          Editar: {user.name}
        </h2>

        <form ref={form} onChange={updateFormData} onSubmit={handleSubmit}>
          {user && (
            <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                {/* Tu formulario aquí */}
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

export default UserForm;
