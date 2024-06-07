// utils/graphql/queries/employees.ts
import { gql } from '@apollo/client';

const GET_EMPLOYEES = gql`
  query Employees(
    $where: EmployeeWhereInput
    $orderBy: [EmployeeOrderByWithRelationInput!]
    $take: Int
    $skip: Int
  ) {
    employees(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
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
  query Employee($where: EmployeeWhereUniqueInput!) {
    employee(where: $where) {
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
