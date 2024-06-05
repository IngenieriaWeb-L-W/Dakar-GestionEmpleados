import { Sidebar } from '@/components/admin/sidebar'
import { Table } from '@/components/admin/table'
import React from 'react'
import { PrivateLayout } from '@/components/PrivateLayout'

const index = () => {
  return (
    <div>
      <PrivateLayout>
        <Sidebar/>
        <Table/>
      </PrivateLayout>
    </div>
  )
}

export default index
