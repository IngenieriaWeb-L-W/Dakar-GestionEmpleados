import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
//import { useAtom } from 'jotai';
import {Session} from '@/components/home/session';
import Image from 'next/image';
const Navbar = () => {
  const router = useRouter();
  const id = 1;
  
  return (
    <nav className='bg-white shadow dark:bg-gray-900'>
      <div className='container px-6 py-4 mx-auto'>
        <div className='lg:flex lg:items-center lg:justify-between'>
          <div className='flex items-center justify-between'>
            <Link href='/'>
              <Image
                className='w-auto h-6 sm:h-7'
                src='https://merakiui.com/images/full-logo.svg'
                alt='Meraki UI Logo' 
                width={96}
                height={96}/>             
            </Link>
            <div className='flex lg:hidden'>
              <button
                type='button'
                className='text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'
                aria-label='toggle menu'
              >
                {/* Agrega el icono de menú aquí */}
              </button>
            </div>
          </div>
          <div className='absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0'>
            <div className='-mx-4 lg:flex lg:items-center'>
              <Link
                href='/employees'
                className='block mx-4 text-gray-700 capitalize dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
              >
                Employees
              </Link>
              <Link
                  onClick={() => router.push(`/employee/${id}`)}
                  href='Null'
                  className='block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
                >
                  Employees2
                  {/*UI/UX Designers*/}
                </Link>

              <Link
                href='/evaluations'
                className='block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
              >
                Evaluations
              </Link>
              <Link
                href='/materials'
                className='block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
              >
                Materials
              </Link>

             {/* <Link
                  onClick={() => router.push('http://localhost:3000/admin')}
                  href='http://localhost:3000/admin'
                  className='block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
                >
                  Admin
  </Link>*/}
               <Link
                  onClick={() => router.push('admin')}
                  href='/admin'
                  className='block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
                >
                  Admin
                </Link>

              <Session/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export {Navbar};
