import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '@/utils/graphql/queries/users'; // Ajusta esta ruta según sea necesario
import { useRouter } from 'next/router';
//import { useSession } from 'next-auth/react';
import {TR} from '@/components/admin/user/userdialog'; // Ajusta la ruta según sea necesario
import { User } from '@/types/global';

interface TableProps {
  countUsers?: number;
  user?: Partial<User>; // Permitir propiedades opcionales para el usuario prop
}

const Table: React.FC<TableProps> = ({ countUsers = 0,}) => {
 

  

  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState('');
  const [auxSearch, setAuxSearch] = useState('');
  const [skip, setSkip] = useState(0);
  const [page, setPage] = useState(1);
  const PageRelation = 4;
  const router = useRouter();
  const { loading } = useQuery(GET_USERS, {
    variables: {
      take: PageRelation,
      skip: skip,
      orderBy: { name: 'asc' },
      where: {
        OR: [
          {
            name: {
              contains: search,
              mode: 'insensitive',
            },
          },
          {
            email: {
              contains: search,
              mode: 'insensitive',
            },
          },
        ],
      },
    },
    fetchPolicy: 'cache-and-network',
    onCompleted: (data) => {
      setUsers(data.users);
    },
  });

  return (
    <div className='bg-gray-800 p-40'>
      <section className='container px-4 mx-auto'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <div>
            <div className='flex items-center gap-x-3'>
              <h2 className='text-lg font-medium text-gray-800 dark:text-white'>Users</h2>
              <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400'>
                {countUsers} Users
              </span>
            </div>
          </div>

          <div className='flex items-center mt-4 gap-x-3'>
            <button className='flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clipPath='url(#clip0_3098_154395)'>
                  <path
                    d='M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832'
                    stroke='currentColor'
                    strokeWidth='1.67'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_3098_154395'>
                    <rect width='20' height='20' fill='white' />
                  </clipPath>
                </defs>
              </svg>
              <span>Import</span>
            </button>

            
              <button
                onClick={() => {
                  router.push('/admin/users/new');
                }}
                className='flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-5 h-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 4.5v15m7.5-7.5h-15'
                  />
                </svg>

                <span>Add User</span>
              </button>
            
          </div>
        </div>

        <div className='mt-6 md:flex md:items-center md:justify-between'>
          <div className='relative flex items-center mt-4 md:mt-0'>
            <span className='absolute'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5 mx-3 text-gray-400 dark:text-gray-600'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <circle cx='11' cy='11' r='8' />
                <line x1='21' y1='21' x2='16.65' y2='16.65' />
              </svg>
            </span>

            <input
              type='text'
              placeholder='Search'
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setSearch(auxSearch);
                }
              }}
              onChange={(e) => setAuxSearch(e.target.value)}
              className='block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
            />
          </div>
        </div>

        <div className='flex flex-col mt-6'>
          <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle'>
              <div className='overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg'>
                <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                  <thead className='bg-gray-50 dark:bg-gray-800'>
                    <tr>
                      <th
                        scope='col'
                        className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'
                      >
                        <button className='flex items-center gap-x-3 focus:outline-none'>
                          <span>Name</span>

                          <svg
                            className='h-3'
                            viewBox='0 0 10 11'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M2.5 5.5L5 8.5L7.5 5.5'
                              stroke='currentColor'
                              strokeWidth='1.25'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M2.5 2.5L5 5.5L7.5 2.5'
                              stroke='currentColor'
                              strokeWidth='1.25'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </button>
                      </th>

                      <th
                        scope='col'
                        className='px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'
                      >
                        Email
                      </th>

                      <th
                        scope='col'
                        className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'
                      >
                        Role
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900'>
                  {loading && (
                      <tr>
                        <td
                          colSpan={6}
                          className='whitespace-nowrap px-4 py-4 text-sm text-gray-500 dark:text-gray-400'
                        >
                          Loading...
                        </td>
                      </tr>
                    )}
                    {!loading && users.length === 0 && (
                      <tr>
                        <td
                          colSpan={6}
                          className='whitespace-nowrap px-4 py-4 text-sm text-gray-500 dark:text-gray-400'
                        >
                          No Users found.
                        </td>
                      </tr>
                    )}
                    {users.map((user) => (
                      <TR key={user.id} user={user} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
        </div>

        <div className='flex items-center justify-between mt-6'>
          <a
            href='n'
            className='text-sm text-gray-700 capitalize transition-colors duration-200 dark:text-gray-200 hover:text-gray-500'
            onClick={() => {
              if (page > 1) {
                setSkip(skip - PageRelation);
                setPage(page - 1);
              }
            }}
          >
            previous
          </a>

          <div className='hidden lg:flex lg:items-center lg:gap-2'>
            <a
              href='n'
              className='px-2 py-1 text-sm text-blue-500 bg-blue-100/60 rounded-md dark:bg-gray-800 dark:text-blue-400'
            >
              {page}
            </a>
          </div>

          <a
            href='N'
            className='text-sm text-gray-700 capitalize transition-colors duration-200 dark:text-gray-200 hover:text-gray-500'
            onClick={() => {
              if (users.length >= PageRelation) {
                setSkip(skip + PageRelation);
                setPage(page + 1);
              }
            }}
          >
            Next
          </a>
        </div>
      </section>
    </div>
  );
};

export {Table};
