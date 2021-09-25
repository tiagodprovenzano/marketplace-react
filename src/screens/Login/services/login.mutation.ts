import gql from "graphql-tag";

export const LOGIN_QUERY = gql`
  mutation (
    $email: String!
    $password: String!
  ) {
    login(email: $email, password: $password) {
      id
      name
      email
      token
    }
  }
`;
