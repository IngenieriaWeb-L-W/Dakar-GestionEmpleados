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
      createdAt
      updatedAt
    }
  }
`;
