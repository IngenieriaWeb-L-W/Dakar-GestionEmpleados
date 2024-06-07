interface IFormdata {
  firstName: string;
  lastName: string;
  email: string;
  hireDate: string;
  position: string;
  department: string;
  salary: string;
  hoursWorked: string;
}

interface Iprops {
  formdata: IFormdata;  
}

const upsertEmployeesTransformation = ({ formdata }: Iprops) => {
  const { firstName, lastName, email, hireDate, position, department, salary, hoursWorked } = formdata;

  const dataCreate = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    hireDate: new Date(hireDate),  // Asegúrate de que el formato de la fecha sea correcto
    position: position,
    department: department,
    salary: parseFloat(salary),
    hoursWorked: parseInt(hoursWorked, 10),
  };

  const dataUpdate = {
    firstName: {
      set: firstName,
    },
    lastName: {
      set: lastName,
    },
    email: {
      set: email,
    },
    hireDate: {
      set: new Date(hireDate),  // Asegúrate de que el formato de la fecha sea correcto
    },
    position: {
      set: position,
    },
    department: {
      set: department,
    },
    salary: {
      set: parseFloat(salary),
    },
    hoursWorked: {
      set: parseInt(hoursWorked, 10),
    },
  };

  return { dataCreate, dataUpdate };
};

export {upsertEmployeesTransformation};
