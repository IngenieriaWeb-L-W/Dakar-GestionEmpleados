import { gql } from '@apollo/client';

export const UPSERT_EMPLOYEE = gql`
  mutation UpsertOneEmployee(
    $where: EmployeeWhereUniqueInput!
    $create: EmployeeCreateInput!
    $update: EmployeeUpdateInput!
  ) {
    upsertOneEmployee(where: $where, create: $create, update: $update) {
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

export const DELETE_EMPLOYEE = gql`
  mutation DeleteOneEmployee($where: EmployeeWhereUniqueInput!) {
    deleteOneEmployee(where: $where) {
      id
    }
  }
`;

export const CREATE_MANY_EMPLOYEES = gql`
  mutation Mutation($data: [EmployeeCreateManyInput!]!) {
    createManyEmployee(data: $data) {
      count
    }
  }
`;
