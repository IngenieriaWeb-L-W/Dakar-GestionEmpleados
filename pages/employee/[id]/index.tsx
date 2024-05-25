// pages/employees/[id].tsx
import { Details } from "@/components/employee/details";
import axios from 'axios';
import { EmployeeType } from '@/types/global';
import { GetServerSideProps } from 'next';

interface EmployeeDetailsProps {
  employee: EmployeeType;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context.params || !context.params.id) {
    return {
      notFound: true, // Devolver 404 si no hay parámetros
    };
  }
  const { id } = context.params;
  try {
    // Cambia la URL a la que corresponda para obtener los detalles del empleado
    const response = await axios.get(`/employees/${id}`);
    return {
      props: { employee: response.data },
    };
  } catch (error) {
    // Manejar errores de solicitud
    return {
      notFound: true, // Devolver 404 si no se puede encontrar el empleado
    };
  }
}

const EmployeeDetails: React.FC<EmployeeDetailsProps> = ({ employee }) => {
  return (
    <div>
      {/* Renderiza los detalles del empleado */}
      <Details employee={employee} />
    </div>
  );
};

export default EmployeeDetails;
