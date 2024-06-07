import { Sidebar } from '@/components/admin/sidebar'
import { Table } from '@/components/admin/table'
import React from 'react'
import { PrivateLayout } from '@/components/PrivateLayout'
import prisma from '@/config/prisma'

export const getServerSideProps = async () => {
  const countEmployees = await prisma.employee.count();
  return {
    props: {
      countEmployees,
    },
  };
};

const index = ({countEmployees=0}) => {
  return (
    <div>
      <PrivateLayout>
        <Sidebar/>
        <Table countEmployees={countEmployees}/>
      </PrivateLayout>
    </div>
  )
}

export default index
