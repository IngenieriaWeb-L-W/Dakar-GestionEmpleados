export type EmployeeType = {
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

export type EvaluationType = {
  id: string;
  employeeId: string;
  performance: number;
  comments?: string | null;
  createdAt: string; // Otra alternativa sería usar Date
  updatedAt: string; // Otra alternativa sería usar Date
};

