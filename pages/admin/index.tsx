import { Sidebar } from '@/components/admin/sidebar'
//import { Table } from '@/components/admin/table'
import React from 'react'
import { PrivateLayout } from '@/components/PrivateLayout'
//import prisma from '@/config/prisma'

{/*export const getServerSideProps = async () => {
  const countEmployees = await prisma.employee.count();  {countEmployees=0}
  return {
    props: {
      countEmployees,
    },
  };
};*/}

const index = () => {
  return (
    <div>
      <PrivateLayout>
        <Sidebar/>
        {/*<Table countEmployees={countEmployees}/>*/}
      </PrivateLayout>
    </div>
  )
}

export default index
