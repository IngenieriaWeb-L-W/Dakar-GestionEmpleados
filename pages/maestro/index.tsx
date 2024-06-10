//import { Sidebar } from '@/components/admin/sidebar'
import { Table } from '@/components/admin/table'
import React from 'react'
//import { PrivateLayout } from '@/components/PrivateLayout'
//import prisma from '@/config/prisma'



const index = ({countEmployees=0}) => {
  return (
    <div>
      
    
        <Table countEmployees={countEmployees}/>
      
    </div>
  )
}

export default index
