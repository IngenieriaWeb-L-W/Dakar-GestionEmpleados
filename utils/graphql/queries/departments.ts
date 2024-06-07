import { gql } from '@apollo/client';

export const GET_DEPARTMENTS = gql`
  query Query {
    departments {
      name
      id
      description
    }
  }
`;
