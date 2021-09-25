import gql from "graphql-tag";

export const GET_USER = gql`
  query ($userId: ID!) {
    user(id: $userId) {
      id
      name
      email
      token
    }
  }
`;
