// utils/graphql/queries/employees.ts
import { gql } from '@apollo/client';

const GET_EMPLOYEES = gql`
  query Employees($take: Int, $skip: Int) {
    employees(take: $take, skip: $skip) {
      id
      firstName
      lastName
      email
      hireDate
      position
      department
      salary
      hoursWorked
    }
  }
`;

const GET_EMPLOYEE = gql`
  query Employee($id: String!) {
    employee(id: $id) {
      id
      firstName
      lastName
      email
      hireDate
      position
      department
      salary
      hoursWorked
    }
  }
`;

export { GET_EMPLOYEES, GET_EMPLOYEE };
