import { GetServerSideProps } from 'next';
import { PrismaClient} from '@prisma/client';
import {Details} from '@/components/employee/details/';
import React from 'react';
import { employeeType } from '@/types/global';

type Params = {
  id: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  if (!params || !params.id) {
    return {
      notFound: true,
    };
  }

  const { id } = params as Params;
  const prisma = new PrismaClient();

  try {
    const employee = await prisma.employee.findUnique({
      where: { id },
    });

    if (!employee) {
      return {
        notFound: true,
      };
    }

    return {
      props: { employee },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  } finally {
    await prisma.$disconnect();
  }
};

interface IndexProps {
  employee: employeeType;
}

const Index: React.FC<IndexProps> = ({ employee }) => {
  return (
    <div>
      <Details employee={employee} />
    </div>
  );
};

export default Index;
