//import { Sidebar } from '@/components/admin/sidebar'
import { Table } from '@/components/admin/user/usertable'
import React from 'react'
import { PrivateLayout } from '@/components/PrivateLayout'
//import prisma from '@/config/prisma'



const index = () => {
  return (
    <div>
       <PrivateLayout>
        <Table/> 
      </PrivateLayout>   
             
    </div>
  )
}

export default index
