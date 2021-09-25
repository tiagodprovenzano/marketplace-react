import gql from "graphql-tag";

export const LOGOUT = gql`
  query Logout($id: ID!) {
    logout(id: $id)
  }
`;
