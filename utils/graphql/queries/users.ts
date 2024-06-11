import { gql } from '@apollo/client';

const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      image
      creationDate
      roleId
    }
  }
`;

const GET_USERS = gql`
  query GetUsers($take: Int!, $skip: Int!, $orderBy: UserOrderByInput, $where: UserWhereInput) {
    users(take: $take, skip: $skip, orderBy: $orderBy, where: $where) {
      id
      name
      email
      image
      roleId
    }
  }
`;

export { GET_USERS, GET_USER };
