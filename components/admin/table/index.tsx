import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_EMPLOYEES } from '@/utils/graphql/queries/employees'; // Asegúrate de ajustar la ruta según tu estructura de proyecto
import { employeeType } from '@/types/global';
import {Tr} from '@/components/admin/tr'; // Ajusta este componente para empleados

import { useRouter } from 'next/router';

const Table = ({ countEmployees = 0 }) => {
  const [employees, setEmployees] = useState<employeeType[]>([]);
  const [search, setSearch] = useState('');
  const [auxSearch, setAuxSearch] = useState('');
  const [skip, setSkip] = useState(0);
  const [page, setPage] = useState(1);
  const PageRelation = 4;
  const router = useRouter();
  const { loading } = useQuery(GET_EMPLOYEES, {
    variables: {
      take: PageRelation,
      skip: skip,
      orderBy: { lastName: 'asc' },
      where: {
        OR: [
          {
            firstName: {
              contains: search,
              mode: 'insensitive',
            },
          },
          {
            lastName: {
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
      setEmployees(data.employees);
      //console.log('data :>> ', data);
    },
  });

  return (
    <div className='bg-gray-800 p-40'>
      <section className='container px-4 mx-auto'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <div>
            <div className='flex items-center gap-x-3'>
              <h2 className='text-lg font-medium text-gray-800 dark:text-white'>Employees</h2>

              <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400'>
                {countEmployees} Employees
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
                router.push('/admin/employees/new');
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
                  d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>

              <span> Add Employee</span>
            </button>
          </div>
        </div>

        <div className='mt-6 md:flex md:items-center md:justify-between'>
          <div className='relative flex items-center mt-4 md:mt-0'>
            <span className='absolute'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-5 h-5 mx-3 text-gray-400 dark:text-gray-600'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                />
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

          <div className='flex items-center justify-between mt-4 md:mt-0 md:justify-end'>
            <div className='flex items-center gap-x-3'>
              <button
                onClick={() => {
                  if (page > 1) {
                    setPage(page - 1);
                    setSkip(skip - PageRelation);
                  }
                }}
                className='flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700'
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
                    d='M15.75 19.5L8.25 12l7.5-7.5'
                  />
                </svg>

                <span>Previous</span>
              </button>

              <button
                onClick={() => {
                  if (page < Math.ceil(countEmployees / PageRelation)) {
                    setPage(page + 1);
                    setSkip(skip + PageRelation);
                  }
                }}
                className='flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700'
              >
                <span>Next</span>

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
                    d='M8.25 4.5l7.5 7.5-7.5 7.5'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className='flex flex-col mt-6'>
          <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
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
                              d='M2.5 5.5L5 2.5L7.5 5.5'
                              stroke='currentColor'
                              strokeWidth='1.25'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M2.5 5.5L5 8.5L7.5 5.5'
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
                        Position
                      </th>

                      <th
                        scope='col'
                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'
                      >
                        Email
                      </th>

                      <th
                        scope='col'
                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'
                      >
                        Department
                      </th>

                      <th
                        scope='col'
                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'
                      >
                        Hire Date
                      </th>

                      <th
                        scope='col'
                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'
                      >
                        Salary
                      </th>

                      <th scope='col' className='relative py-3.5 px-4'>
                        <span className='sr-only'>Edit</span>
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
                    {!loading && employees.length === 0 && (
                      <tr>
                        <td
                          colSpan={6}
                          className='whitespace-nowrap px-4 py-4 text-sm text-gray-500 dark:text-gray-400'
                        >
                          No employees found.
                        </td>
                      </tr>
                    )}
                    {employees.map((employee) => (
                      <Tr employee={employee} key={employee.id}  />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-6 sm:flex sm:items-center sm:justify-between '>
          <div className='text-sm text-gray-500 dark:text-gray-400'>
            Page{' '}
            <span className='font-medium text-gray-700 dark:text-gray-100'>
              {' '}
              {page} of {Math.ceil(countEmployees/ PageRelation)}
            </span>
          </div>

          <div className='flex items-center mt-4 gap-x-4 sm:mt-0'>
            <button
              onClick={() => {
                if (skip === 0) return;
                setSkip(skip - PageRelation);
                setPage(page - 1);
              }}
              className='flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-5 h-5 rtl:-scale-x-100'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                />
              </svg>

              <span>previous</span>
            </button>

            <button
              onClick={() => {
                if (page === Math.ceil(countEmployees / PageRelation)) return;
                setSkip(skip + PageRelation);
                setPage(page + 1);
              }}
              className='flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800'
            >
              <span>Next</span>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-5 h-5 rtl:-scale-x-100'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export {Table};
