import React from 'react';
import { employeeType } from '@/types/global'; 
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { useMutation } from '@apollo/client';
import { DELETE_EMPLOYEE } from '@/utils/graphql/mutations/employees';
import {BasicModal} from '@/components/admin/modal';
import { toast } from 'react-toastify';

interface Props {
  employee: employeeType;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      id: context.query.id as string,
    },
  };
};

const Tr = ({ employee }: Props) => {
  const router = useRouter();
  const [deleteEmployee, {loading}] = useMutation(DELETE_EMPLOYEE);
  const[open, setOpen]=React.useState(false);
  const handleClose = () => setOpen(false);
  
  const handleSubmit = async (id: string) => {
    await deleteEmployee({
      variables: { where: { id } },
    }).then(() => {
      toast.success('Employee  deleted successfully!');
      router.reload();
      setOpen(false);
    });
  };

  return (
    <tr className=''>
      <td className='px-4 py-4 text-sm font-medium whitespace-nowrap'>
        <div>
          <h2 className='font-medium text-gray-800 dark:text-white '>
            {employee.firstName} {employee.lastName}
          </h2>
        </div>
      </td>
      <td className='px-12 py-4 text-sm max-w-96'>
        <div className='inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800'>
          {employee.position}
        </div>
      </td>
      <td className='px-4 py-4 text-sm max-w-96 '>
        <div>
          <p className='text-gray-500 dark:text-gray-400'>{employee.email}</p>
        </div>
      </td>
      <td className='px-4 py-4 text-sm whitespace-nowrap'>
        <div className='text-gray-500 dark:text-gray-400'>
          {employee.department}
        </div>
      </td>
      <td className='px-4 py-4 text-sm whitespace-nowrap'>
        <div className='text-gray-500 dark:text-gray-400'>
          {new Date(employee.hireDate).toLocaleDateString()}
        </div>
      </td>
      <td className='px-4 py-4 text-sm whitespace-nowrap'>
        <div className='text-gray-500 dark:text-gray-400'>
          Salary: ${employee.salary.toLocaleString()}
        </div>
      </td>
      <td className='px-4 py-4 text-sm whitespace-nowrap'>
        <button
          onClick={() => router.push(`/admin/employees/${employee.id}`)}
          className='flex items-center justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 transform bg-blue-600 border border-transparent rounded-md active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z'
            />
          </svg>
        </button>
        <button
        onClick={() => {
          setOpen(true);
          
        }
        }
        className='px-1 py-1  text-white transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100'>
          <i
          className='iconify w-10 h-10 text-white'
          data-icon='icon-park:delete'
          />
        </button>
        </td>
        <BasicModal
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        handleSubmit={() => {
          handleSubmit(employee.id);
        } } 
        //loading={false}          
        loading = {loading}
          />
    </tr>
    
  );
};

export {Tr};
