import { gql } from "@apollo/client";

export const STORES = gql`
  query getQuerys {
    stores {
      id,
      name
    }
  }
`