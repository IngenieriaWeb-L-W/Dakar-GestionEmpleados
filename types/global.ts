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