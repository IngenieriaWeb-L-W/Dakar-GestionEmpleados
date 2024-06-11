export type employeeType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  hireDate: string;
  position: string;
  department: string;
  salary: number;
  hoursWorked: number;
};


export interface Maestro {
  id: number;
  name: string;
}

export interface Movimiento {
  id: number;
  fecha: string;
  cantidad: number;
  ejecutor: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  image: string; // Asegúrate de que esta propiedad esté definida
  roleId: string;  // Asegúrate de que esta propiedad esté definida
}