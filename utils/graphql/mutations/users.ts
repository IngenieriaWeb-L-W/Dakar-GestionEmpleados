import { gql } from '@apollo/client';

export const UPSERT_USER = gql`
  mutation UpsertOneUser(
    $where: UserWhereUniqueInput!
    $create: UserCreateInput!
    $update: UserUpdateInput!
  ) {
    upsertOneUser(where: $where, create: $create, update: $update) {
      id
      name
      email
      image
      roleId
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteOneUser($where: UserWhereUniqueInput!) {
    deleteOneUser(where: $where) {
      id
    }
  }
`;

export const CREATE_MANY_USERS = gql`
  mutation Mutation($data: [UserCreateManyInput!]!) {
    createManyUser(data: $data) {
      count
    }
  }
`;
